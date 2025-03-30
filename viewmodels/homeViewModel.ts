import { useState, useRef, useEffect } from "react";
import { Alert } from "react-native";
import MapView from "react-native-maps";
import places from "../models/places.json";
import { setSession, loadFavorites, saveFavorites } from "../models/storage"; 
import { useRouter,useLocalSearchParams} from "expo-router";
import Constants from "expo-constants";
const gisApiKey = Constants.expoConfig?.extra?.gisApiKey;
type Place = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  };
type Maneuver = {
    outcoming_path?: {
      geometry: Segment[];
    };
  };
  
type Segment = {
    selection: string;
  };
  
export function homeViewModel() {
  const [routeCoords, setRouteCoords] = useState([]);
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [showList, setShowList] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentLocation, setCurrentLocation] = useState<{ latitude: number; longitude: number }>({latitude: 0,longitude: 0});
  const mapRef = useRef<MapView>(null);
  const router = useRouter();
  const [showUser, setshowUser] = useState(false);
  const {username} = useLocalSearchParams();
  useEffect(() => {
    const getFavorites = async () => {
      const storedFavorites = await loadFavorites();
      setFavorites(storedFavorites);
    };
    getFavorites();
  }, []);

 const fetchRoute = async (destination: Place) => {
    try {
      const url = `https://routing.api.2gis.com/routing/7.0.0/global?key=${gisApiKey}`;
      const body = JSON.stringify({
        points: [
          { type: "stop", lon: currentLocation.longitude, lat: currentLocation.latitude },
          { type: "stop", lon: destination.longitude, lat: destination.latitude },
        ],
        transport: "driving",
        route_mode: "fastest",
        traffic_mode: "jam",
      });
  
      const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body });
  
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
  
      const json = await response.json();
  
      if (json.result.length > 0) {
        const coords = json.result[0].maneuvers.flatMap((maneuver: Maneuver) =>
          maneuver.outcoming_path?.geometry.flatMap((segment: Segment) =>
            segment.selection
              .replace("LINESTRING(", "")
              .replace(")", "")
              .split(", ")
              .map((point: string) => {
                const [lon, lat] = point.split(" ").map(Number);
                return { latitude: lat, longitude: lon };
              })
          ) || []
        );
  
        if (coords.length > 0) {
          setRouteCoords(coords);
          setStartPoint(coords[0]);
          setEndPoint(coords[coords.length - 1]);
        } 
        else {
          Alert.alert("Ошибка", "Маршрут не найден.");
          setRouteCoords([]);
        }
      } 
      else {
        Alert.alert("Ошибка", "Маршрут не найден.");
        setRouteCoords([]);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Ошибка", error.message);
        console.log(error);
      } 
      else {
        Alert.alert("Ошибка", "Ошибка");
      }
      setRouteCoords([]);
    }
  };
  

  const centerPlace = (placeLat: number, placeLong: number) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: placeLat,
        longitude: placeLong,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
    }
  };

  const setFavorite = (place: Place) => {
    setFavorites(currentFavorites => {
      const isFavorite = currentFavorites.includes(place.id);
      let updatedFavorites;
  
      if (isFavorite) {
        updatedFavorites = currentFavorites.filter(id => id !== place.id);
      } 
      else {
        updatedFavorites = [...currentFavorites, place.id];
      }
  
      saveFavorites(updatedFavorites);
      return updatedFavorites;
    });
  };
  

  const sortedPlaces = places.filter(p => favorites.includes(p.id)).concat(
    places.filter(p => !favorites.includes(p.id))
  );
  
  const updateCurrentLocation = (latitude: number, longitude: number) => {
    setCurrentLocation({ latitude, longitude });
  };

  const logoutFunc = async () => {
    await setSession(false); 
    router.replace("/login");
  };
  
  const redirectPlace = (place:Place) => {
    router.replace({
      pathname: "/place",
      params: { place: JSON.stringify(place) }
    });
  };
  return {
    mapRef,
    currentLocation,
    sortedPlaces,
    showList,
    setShowList,
    routeCoords,
    startPoint,
    endPoint,
    favorites,
    setFavorite,
    centerPlace,
    fetchRoute,
    updateCurrentLocation,
    logoutFunc,
    setshowUser,
    showUser,
    username,
    redirectPlace
  };
}
