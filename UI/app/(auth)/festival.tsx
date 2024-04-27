import React from "react";
import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const festivals = [
  {
    "id": 1,
    "name": "Lễ hội Hoa Ban",
    "image": require("../../assets/Festivals/1.jpg")
  },
  {
    "id": 2,
    "name": "Lễ hội Hoa Anh Đào",
    "image": require("../../assets/Festivals/2.jpg")
  },
  {
    "id": 3,
    "name": "Chợ phiên Tủa Chùa",
    "image": require("../../assets/Festivals/3.jpg")
  },
  {
    "id": 4,
    "name": "Lễ hội Thành Bản Phù",
    "image": require("../../assets/Festivals/4.jpg")
  },
  {
    "id": 5,
    "name": "Kỷ niệm chiến thắng Điện Biên Phủ",
    "image": require("../../assets/Festivals/5.jpg")
  },
  {
    "id": 6,
    "name": "Tết cổ truyền",
    "image": require("../../assets/Festivals/6.jpg")
  },
  {
    "id": 7,
    "name": "Hương sắc Điện Biên",
    "image": require("../../assets/Festivals/7.jpg")}
];

const Festival = () => {
  return (
    <View>
      <View style = {styles.searchSectionWrapper}>
        <View style = {styles.searchBar}>
          <Ionicons name="search" size={28} color = {Colors.black}/>
          <TextInput placeholder="Tìm kiếm..."/>
        </View>
        <TouchableOpacity onPress={() => {}} style = {styles.FilterButton}>
          <Ionicons name="options" size={28} color = {Colors.black}/>
        </TouchableOpacity>
      </View>
      
      <View>
        <FlatList
          data={festivals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style = {{marginHorizontal: 10, marginVertical: 5}}>
              <Image source = {item.image} style = {{width: "auto", height: 200, borderRadius: 10, marginBottom: 10}}/>
              <Text style = {{fontSize: 20, fontWeight: "bold", marginVertical: 5}}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      
      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  FilterButton: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
  },
});

export default Festival;
