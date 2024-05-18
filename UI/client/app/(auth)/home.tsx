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
import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import Service from "./service";
import Map from "../../component/map";
import heritage from "../data/HerirtageData";
import { Link } from "expo-router";
import scenicSpots from "../data/ScenicSpots";
import instance from "../../utils/axios";
const getWidth = Dimensions.get("window").width;

const Home = () => {
  const userId = useAuth();
  const { user } = useUser();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Giá trị searchText:", searchText);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const renderItem = ({ item }) => (
    <View>
      <Image source={item.image} style={styles.smallImage} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await instance.post("/createUser", {
          id: user.id,
          name: user.fullName,
        });
        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.status === 409) {
          console.log(error.response.data.message);
        } else {
          console.error("An error occurred", error.message);
        }
      }
    };

    if (user.id && user.fullName) {
      createUser();
    }
  }, [user.id, user.fullName]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView
          style={[isExpanded ? styles.expandedMap : styles.collapsedMap]}
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
          <Map />
        </SafeAreaView>
        <Text style={styles.text}>Di tích</Text>

        <View style={styles.row}>
          <FlatList
            style={styles.listLocation}
            data={heritage}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <Text style={styles.text}>Danh lam thắng cảnh</Text>

        <View style={styles.row}>
          <FlatList
            style={styles.listLocation}
            data={scenicSpots}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={styles.service}>
          <Text style={styles.text}>Dịch vụ</Text>
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
  collapsedMap: {
    height: 300,
  },
  expandedMap: {
    height: 700,
  },
  expandButtonText: {
    color: "#10bfde",
    textAlign: "center",
    fontWeight: "500",
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
    bottom: 85,
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
    marginBottom: 20,
  },
  service: {
    height: 450,
    marginBottom: 20,
  },
  listLocation: {
    flex: 1,
  },

  smallImage: {
    width: 160,
    height: 100,
    marginLeft: 20,
    borderRadius: 5,
  },

  text: {
    fontSize: 22,
    color: "#EB841C",
    marginLeft: 17,
    marginTop: 30,
    fontWeight: "bold",
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
    width: 160,
    textAlign: "center",
    color: "black",
    fontWeight: "400",
    fontSize: 14,
    marginLeft: 20,
  },
  serviceItem: {
    paddingBottom: 10,
  },
});

export default Home;
