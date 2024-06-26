import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
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
        <Link href="/listServices/ticket" asChild>
          <TouchableOpacity
            style={{ ...styles.item, backgroundColor: "#33b055" }}
          >
            <Fontisto name="ticket" size={29} color="white" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Đặt vé</Text>
      </View>

      <View>
        <Link href="/listServices/listFood/food" asChild>
          <TouchableOpacity
            style={{ ...styles.item, backgroundColor: "#a232e3" }}
          >
            <MaterialCommunityIcons
              name="food-turkey"
              size={29}
              color="white"
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Ẩm thực</Text>
      </View>

      <View>
        <Link href="/listServices/electricCar" asChild>
          <TouchableOpacity
            style={{ ...styles.item, backgroundColor: "#2297e0" }}
          >
            <MaterialIcons name="electric-car" size={29} color="white" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Đặt xe điện</Text>
      </View>

      <View>
        <Link href="/listServices/tour" asChild>
          <TouchableOpacity
            style={{ ...styles.item, backgroundColor: "#e6ae2e" }}
          >
            <MaterialCommunityIcons
              name="transit-detour"
              size={29}
              color="white"
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Tour</Text>
      </View>

      <View>
        <Link href="/listServices/photo" asChild>
          <TouchableOpacity
            style={{ ...styles.item, backgroundColor: "#f0435a" }}
          >
            <Entypo name="camera" size={29} color="white" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Chụp ánh</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginHorizontal: 30,
  },
  item: {
    backgroundColor: "#2E82FF",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    margin: 20,
    marginBottom: 10,
    shadowOpacity: 5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  title: {
    textAlign: "center",
    color: "black",
    marginBottom: 30,
    fontSize: 16,
  },
});

export default Service;
