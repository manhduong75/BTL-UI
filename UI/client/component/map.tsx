import React, { useEffect, useRef } from "react";
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
  MapStyleElement,
} from "react-native-maps";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";
import { markers } from "../assets/markers";
import { Entypo } from "@expo/vector-icons";

const INITIAL_REGION = {
  latitude: 21.3852,
  longitude: 103.0203,
  latitudeDelta: 0.04,
  longitudeDelta: 0.04,
};

export default function Map() {
  const mapRef = useRef<any>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={focusMap} style={{ marginRight: 10 }}>
          <Entypo name="location-pin" size={28} color="white" />
        </TouchableOpacity>
      ),
    });
  }, []);

  const focusMap = () => {
    const focusLocation = {
      latitude: 21.380564296389437,
      longitude: 103.015875699283,
      latitudeDelta: 0.04,
      longitudeDelta: 0.04,
    };

    mapRef.current?.animateToRegion(focusLocation);
  };

  const calloutPressed = (ev: any) => {
    console.log(ev);
  };

  const onRegionChange = (region: Region) => {
    console.log(region);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        onRegionChangeComplete={onRegionChange}
      >
        {markers.map((marker, index) => (
          <Marker key={index} title={marker.name} coordinate={marker}>
            <Callout onPress={calloutPressed}>
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  minWidth: 50,
                  maxWidth: 200,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 16,
                    flexWrap: "wrap",
                    textAlign: "center",
                  }}
                >
                  {marker.name}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
