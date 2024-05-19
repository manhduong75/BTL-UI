import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const { width: screenWidth } = Dimensions.get("window");
import events from "../data/Event"

const Festival = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = () => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const renderImageItem = ({ item }) => (
    <View style={styles.item}>
      <Link
        href={{
          pathname: "/eventDetail/[id]",
          params: { id: item.id }
        }}
      >
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}> {item.title}</Text>
        </View>
      </Link>
    </View>
  );

  return (
    <FlatList
      data={filteredEvents}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <ImageBackground
          source={require("../../assets/event/4.jpg")} 
          style={styles.headerBackground}
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
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 30,
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
    // padding: 10,
    height: 2200,
  },
  item: {
    marginBottom: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  image: {
    width: screenWidth,
    height: 200,
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
});

export default Festival;
