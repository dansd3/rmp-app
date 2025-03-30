import { useRef } from "react";
import { FlatList } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export type PlaceType = {
  id: number;
  name: string;
  description: string;
  working_hours: string;
  adress: string;
  images: string[];
  latitude: number;
  longitude: number;
};

export const placeViewModel = () => {
  const router = useRouter();
  const { place} = useLocalSearchParams();
  
  const placeData: PlaceType = Array.isArray(place) ? JSON.parse(place[0]): JSON.parse(place);

  const returnHome = () => {
    router.replace("/home");
  };

  return { placeData, returnHome };
};
