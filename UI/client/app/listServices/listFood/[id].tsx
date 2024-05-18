import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import food from "../../data/Food";

const FoodDetail = () => {
  const { id } = useLocalSearchParams();
  const foodId = Array.isArray(id) ? id[0] : id;
  const foodItem = food.find((item) => item.id.toString() === foodId);

  if (!foodItem) {
    return (
      <View style={styles.container}>
        <Text>Food item not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={foodItem.image} style={styles.image} />
      <Text style={styles.title}>{foodItem.name}</Text>
      <Text>{foodItem.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default FoodDetail;
