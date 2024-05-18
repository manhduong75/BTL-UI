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

const events = [
  {
    id: 1,
    text: "Lễ hội Hoa Ban",
    uri: "https://vnmedia.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/8a10a0d36d961641016db9c9fa273c32/022022/1_20220214152059.jpg",
  },
  {
    id: 2,
    text: "Lễ hội Hoa Anh Đào",
    uri: "https://afamilycdn.com/150157425591193600/2023/12/10/3281055004221258734345941997230514713636857n-1-1702166075638480154269-1702178556587-17021785579251079420961.jpg",
  },
  {
    id: 3,
    text: "Chợ phiên Tủa Chùa",
    uri: "https://i.ytimg.com/vi/DDvNhP-R0eY/sddefault.jpg",
  },
  {
    id: 4,
    text: "Lễ hội Thành Bản Phù",
    uri: "https://baovanhoa.vn/Portals/0/EasyDNNnews/51472/A1.jpg",
  },
  {
    id: 5,
    text: "Kỷ niệm chiến thắng Điện Biên Phủ",
    uri: "https://mediafile.qdnd.vn//images/2024/3/12/cover-3.jpg",
  },
  {
    id: 6,
    text: "Tết cổ truyền",
    uri: "https://gdtd.1cdn.vn/2023/11/28/khong-khi-tet.jpeg",
  },
  {
    id: 7,
    text: "Hương sắc Điện Biên",
    uri: "https://imagev3.dantocmiennui.vn/w1000/Uploaddtmn/2017/3/17/85-1.JPG",
  },
];

const Festival = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Giá trị searchText:", searchText);
  };

  const router = useRouter();

  const renderImageItem = ({ item }) => (
    <View style={styles.item}>
    <Link
        href={{
          pathname: "/herritageDetail/[id]",
          params: { id: item.id }
        }}>
      <View style={styles.item}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.text}> {item.text}</Text>
      </View>
    </Link>
    </View>
  );
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(`/event/${item.id}`)}
    >
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={events}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <ImageBackground
          source={require("../../assets/Festivals/4.jpg")} 
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
