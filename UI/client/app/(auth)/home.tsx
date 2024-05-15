import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import {
  Ionicons,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import Service from "./service";
import WebView from "react-native-webview";
import Map from "../../component/map";
const getWidth = Dimensions.get("window").width;

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView
          style={[
            styles.map,
            isExpanded ? styles.expandedMap : styles.collapsedMap,
          ]}
        >
          <TouchableOpacity
            onPress={toggleExpand}
            style={[
              styles.expandButton,
              isExpanded ? styles.expandButtonExpanded : {},
            ]}
          >
            <Text style={styles.expandButtonText}>
              {isExpanded ? "THU GỌN BẢN ĐỒ" : "MỞ RỘNG BẢN ĐỒ"}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
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

        <View style={styles.service}>
          <Text style={{ fontSize: 20 }}>Dịch vụ</Text>
          <Service />
        </View>
      </View>
    </ScrollView>
  );
};
const imageWidth = Dimensions.get("window").width * 0.8; // Chiều rộng của ảnh là 80% chiều rộng màn hình
const aspectRatio = 800 / 450; // Tỷ lệ giữa chiều rộng và chiều cao của ảnh
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
  },
  collapsedMap: {
    height: 300,
  },
  expandedMap: {
    height: Dimensions.get("window").height,
  },
  expandButtonText: {
    color: "#0dc2d6",
    textAlign: "center",
  },
  expandButton: {
    position: "absolute",
    bottom: -25,
    right: getWidth / 2 - 75,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    zIndex: 10,
    width: 150,
    borderWidth: 1,
    borderColor: "#0dc2d6",
    shadowColor: "#0dc2d6",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  expandButtonExpanded: {
    bottom: 50,
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
    paddingVertical: 10,
    borderRadius: 20,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginRight: 20,
  },
  service: {
    height: 400,
    marginBottom: 20,
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
  },
  item: {
    backgroundColor: "#2E82FF",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    margin: 20,
    shadowOpacity: 5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  title: {
    textAlign: "center",
    color: "black",
    fontWeight: "400",
  },
  serviceItem: {
    paddingBottom: 10,
  },
});

export default Home;