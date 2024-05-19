import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Link, router } from "expo-router";
import food from "../../data/Food";

const Food = () => {
  const itemsPerRow = 2;
  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
    <Link
        href={{
          pathname: "/listServices/listFood/[id]",
          params: { id: item.id } 
        }} >
      <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}> {item.name}</Text>
      </View>
    </Link>
    </View>
  );
  
  return (
    <FlatList
      data={food}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={itemsPerRow}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 5,
    paddingBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    resizeMode: "cover",  
  },
  list: {
    paddingTop: 50,
    padding: 10,
    height: 1150,
  },
  text: {
    marginTop: 5,
    textAlign: "center",
    width: 150,
    fontWeight: "bold",
  },
});

export default Food;
