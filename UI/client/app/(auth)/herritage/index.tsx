import React, { useState } from "react";
// import { StyleSheet, View, Text } from "react-native";

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const indexHerritage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Giá trị searchText:", searchText);
  };

  const [data] = useState([
    {
      id: 1,
      uri: require("../../../assets/Heritage/Buc_tranh_Panorama.jpg"),
      text: "Bức tranh Panorama về chiến dịch Điện Biên Phủ",
    },
    {
      id: 2,
      uri: require("../../../assets/Heritage/Bao_tang_DBP.jpg"),
      text: "Bảo tàng Chiến thắng Lịch sử Điện Biên Phủ",
    },
    {
      id: 3,
      uri: require("../../../assets/Heritage/Tuong_dai_chien_thang.jpg"),
      text: "Tượng đài Chiến thắng",
    },
    {
      id: 4,
      uri: require("../../../assets/Heritage/doi_A1.jpg"),
      text: "Đồi A1",
    },
    {
      id: 5,
      uri: require("../../../assets/Heritage/Ham_De_Carter.jpg"),
      text: "Hầm Đờ-cát",
    },
    {
      id: 6,
      uri: require("../../../assets/Heritage/Nghia_trang_doi_A1.jpg"),
      text: "Nghĩa trang đồi A1",
    },
    {
      id: 7,
      uri: require("../../../assets/Heritage/So_chi_huy_DBP.jpg"),
      text: "Sở chỉ huy chiến dịch Điện Biên Phủ",
    },
    {
      id: 8,
      uri: require("../../../assets/Heritage/Tuong_dai_keo_phao.jpg"),
      text: "Tường đài Kéo pháo",
    },
    {
      id: 9,
      uri: require("../../../assets/Heritage/Den_Tho_Liet_Si_A1.jpg"),
      text: "Thành Bản Phủ (đền thờ Hoàng Công Chất)",
    },
  ]);

  const itemsPerRow = 2;

  const totalPages = Math.ceil(data.length / itemsPerRow);
  const renderImageItem = ({item,}: {item: { id: number; uri: any ; text: string };}) => (
    <TouchableOpacity
      onPress={() => router.push(`/herritage/${item.id}`)}
      style={styles.imageContainer}
    >
        <Image source={item.uri } style={styles.image} />
        <Text style={styles.text}> {item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={itemsPerRow}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
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
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    // backgroundColor: '#fff',
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    padding: 10,
    height: 1200,
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  image: {  
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
    width: 150,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default indexHerritage;
