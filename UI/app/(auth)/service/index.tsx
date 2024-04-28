import { Link } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { Text } from "react-native";

const Service = () => {
  return (
    <View style={styles.container}>
      <View>
        <Link href="/service/ticket" asChild>
          <TouchableOpacity style={styles.item}>
            <Fontisto name="ticket" size={29} color="white" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>ĐẶT VÉ</Text>
      </View>

      <View>
        <Link href="/service/food" asChild>
          <TouchableOpacity style={styles.item}>
            <MaterialCommunityIcons
              name="food-turkey"
              size={29}
              color="white"
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>ẨM THỰC</Text>
      </View>

      <View>
        <Link href="/service/electricCar" asChild>
          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="electric-car" size={29} color="white" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>ĐẶT XE ĐIỆN</Text>
      </View>

      <View>
        <Link href="/service/tour" asChild>
          <TouchableOpacity style={styles.item}>
            <MaterialCommunityIcons
              name="transit-detour"
              size={29}
              color="white"
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>TOUR</Text>
      </View>

      <View>
        <Link href="/service/photo" asChild>
          <TouchableOpacity style={styles.item}>
            <Entypo name="camera" size={29} color="white" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>CHỤP ẢNH</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginHorizontal: 30,
  },
  item: {
    backgroundColor: "#2E82FF",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    margin: 15,
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default Service;
