import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import herritages from "../data/HerirtageData";

const indexHerritage = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Giá trị searchText:", searchText);
  };
  

  const itemsPerRow = 2;
  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
    <Link
        href={{
          pathname: "/herritageDetail/[id]",
          params: { id: item.id }
        }}>
      <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}> {item.title}</Text>
      </View>
    </Link>
    </View>
  );
  
  return (
    <FlatList
      data={herritages}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={itemsPerRow}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <ImageBackground
          source={require("../../assets/AnhDienBien.jpg")} 
          style={styles.headerBackground}
          // imageStyle={{ borderRadius: 30 }}
        >
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Tìm kiếm..."
                value={searchText}
                onChangeText={setSearchText}
              />
              <TouchableOpacity
                style={styles.searchButton}
                onPress={handleSearch}
              >
                <Ionicons
                  name="search"
                  size={24}
                  color="black"
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      }
    />
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: 200, 
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 20,
    marginTop: 50,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    marginTop: 195,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 30,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchButton: {
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    // padding: 5,
    height: 1150,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    paddingBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",  
  },
  text: {
    marginTop: 5,
    textAlign: "center",
    width: 150,
    fontWeight: "bold",
  },
});

export default indexHerritage;
