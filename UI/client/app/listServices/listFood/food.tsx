import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link, router } from "expo-router";
import food from "../../data/Food";

const Food = () => {
  const rows = food.reduce((acc, item, index) => {
    if (index % 2 === 0) acc.push([item]);
    else acc[acc.length - 1].push(item);
    return acc;
  }, []);

  const renderRow = (row, rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {row.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => router.push(`/listFood/${item.id}`)}
        >
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>{rows.map(renderRow)}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  item: {
    width: "48%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  text: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
});

export default Food;
