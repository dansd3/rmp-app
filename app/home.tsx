import { View, StatusBar, TouchableOpacity, Text, FlatList } from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";
import { homeViewModel } from "../viewmodels/homeViewModel";
import styles from "../styles/home";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {

  const {
    mapRef,
    updateCurrentLocation,
    sortedPlaces,
    showList,
    routeCoords,
    startPoint,
    endPoint,
    favorites,
    setShowList,
    setFavorite,
    centerPlace,
    fetchRoute,
    logoutFunc,
    showUser,
    setshowUser,
    username,
    redirectPlace
  } = homeViewModel();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <MapView
        style={styles.map}
        showsCompass={false}
        customMapStyle={[{
          featureType: 'poi',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'poi.attraction',
          stylers: [{ visibility: 'on' }],
        },]}
        ref={mapRef}
        initialRegion={{
          latitude: 44.595490,
          longitude: 33.523524,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onRegionChangeComplete={(region: Region) => updateCurrentLocation(region.latitude, region.longitude)}
        onPoiClick={(event) => {
          const { coordinate } = event.nativeEvent;
          centerPlace(coordinate.latitude, coordinate.longitude);
        }}
      >
        {routeCoords.length > 0 && (<Polyline coordinates={routeCoords} strokeWidth={4} strokeColor="blue" />)}
        {startPoint && <Marker coordinate={startPoint} title="Начало маршрута" pinColor="green" />}
        {endPoint && <Marker coordinate={endPoint} title="Конец маршрута" pinColor="red" />}
      </MapView>

      <TouchableOpacity style={styles.menuButton} onPress={() => setShowList(!showList)}>
        <Text style={styles.menuButtonText}>Достопримечательности</Text>
        <Ionicons name="chevron-expand" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.userButton} onPress={() => setshowUser(!showUser)}>
        <FontAwesome5 name="user" size={24} color="black" />
      </TouchableOpacity>

      {showUser && (
        <View style={styles.userInfoBox}>
          <TouchableOpacity onPress={() => logoutFunc()}>
            <MaterialIcons name="exit-to-app" size={24} color="red" />
          </TouchableOpacity>

        </View>
      )}
      {showList && (
        <View style={styles.listContainer}>
         <FlatList
            data={sortedPlaces}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                  <TouchableOpacity
                    style={styles.placeInfo}
                    onPress={() => redirectPlace(item)}
                  >
                    <Text style={styles.placeName} numberOfLines={1} ellipsizeMode="tail">
                      {item.name}
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => setFavorite(item)}>
                      <Text style={{ fontSize: 22 }}>
                        {favorites.includes(item.id) ? <Entypo name="heart" size={24} color="red" /> : <Entypo name="heart-outlined" size={24} color="black" />
                        }
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => centerPlace(item.latitude, item.longitude)}>
                      <Entypo name="location-pin" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => fetchRoute(item)}>
                      <FontAwesome5 name="route" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
