import React from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import MapView from "react-native-maps";
import { placeViewModel } from "../viewmodels/placeViewModel";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../styles/place";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from 'expo-image';
export default function PlaceDetailsScreen() {

  const {
    placeData,
    returnHome
  } = placeViewModel();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={returnHome}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{placeData.name}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.section}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={placeData.images}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={{ uri: item }}
                  style={styles.image}
                  cachePolicy="memory"
                  priority="high"
                />
              </View>
            )}
            
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.description}>{placeData.description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.description}><MaterialCommunityIcons name="timetable" size={24} color="black" /> {placeData.working_hours}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.description}><FontAwesome5 name="map-marked-alt" size={24} color="black" /> {placeData.adress}</Text>
        </View>

        <View style={styles.section}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: placeData.latitude,
              longitude: placeData.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          />
        </View>
      </ScrollView>
    </View>


  );
}
