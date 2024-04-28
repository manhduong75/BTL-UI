import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const { user } = useUser();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Giá trị searchText:", searchText);
  };

  const ditich = [
    require("../../assets/Heritage/Bao_tang_DBP.jpg"),
    require("../../assets/Heritage/doi_A1.jpg"),
    require("../../assets/Heritage/Ham_De_Carter.jpg"),
    require("../../assets/Heritage/Tuong_dai_chien_thang.jpg"),
    require("../../assets/Heritage/Den_Tho_Liet_Si_A1.jpg"),
  ];

  const danhlam = [
    require("../../assets/Heritage/Canh_dong_Muong_Thanh.jpg"),
    require("../../assets/Heritage/Deo_Pha_Din.jpg"),
    require("../../assets/Heritage/Ho_Pa_Khoang.jpg"),
    require("../../assets/Heritage/Cuc_Tay_A_Pa_Chai.jpg"),
  ];

  return (
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
      <View style={styles.row}>
        <Image
          source={require("../../assets/AnhDienBien.jpg")}
          style={styles.bigImage}
        />
      </View>
      <Text style={styles.text}>Di tích</Text>

      <View style={styles.row}>
        <FlatList
          data={ditich}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.smallImage} />
          )}
        />
      </View>

      <Text style={styles.text}>Danh lam thắng cảnh</Text>

      <View style={styles.row}>
        <FlatList
          data={danhlam}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.smallImage} />
          )}
        />
      </View>
    </View>
  );
};
const imageWidth = Dimensions.get("window").width * 0.8; // Chiều rộng của ảnh là 80% chiều rộng màn hình
const aspectRatio = 800 / 450; // Tỷ lệ giữa chiều rộng và chiều cao của ảnh
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    marginHorizontal: 30,
    marginVertical: 20,
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

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  bigImage: {
    margin: 10,
    width: imageWidth,
    height: imageWidth / aspectRatio,
    borderRadius: 10,
  },

  smallImage: {
    width: 200,
    height: 100,
    marginLeft: 30,
    borderRadius: 5,
  },

  text: {
    fontSize: 20,
    margin: 15,
  },
});

export default Home;
