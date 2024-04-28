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

const Herritage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Giá trị searchText:", searchText);
  };

  const [data] = useState([
    {
      id: 1,
      uri: "https://image.nhandan.vn/Uploaded/2024/pile/2023_05_06/ndo_br_1-8438.jpg",
      text: "Bức tranh Panorama về chiến dịch Điện Biên Phủ",
    },
    {
      id: 2,
      uri: "https://file3.qdnd.vn/data/images/0/2024/04/04/upload_2072/bao%20tang%20dbp.jpg?dpi=150&quality=100&w=870",
      text: "Bảo tàng Chiến thắng Lịch sử Điện Biên Phủ",
    },
    {
      id: 3,
      uri: "https://dienbientv.vn/dataimages/201504/original/images1053952_IMG_1127.jpg",
      text: "Tượng đài Chiến thắng",
    },
    {
      id: 4,
      uri: "https://media.vov.vn/sites/default/files/styles/large/public/2021-05/doi-a1-1.jpg",
      text: "Đồi A1",
    },
    {
      id: 5,
      uri: "https://dulichmocchau.org/view-700/at_ham-do-cat-ghi-dau-an-lich-su-cua-dien-bien_bb443f5bf9c53176055eab796b0fb7b6.jpg",
      text: "Hầm Đờ-cát",
    },
    {
      id: 6,
      uri: "https://vietsensetravel.com/view/at_nghia-trang-doi-a1_8b8b63bf2d580bf40f276cdd9813af54.jpg",
      text: "Nghĩa trang đồi A1",
    },
    {
      id: 7,
      uri: "https://bizweb.dktcdn.net/thumb/1024x1024/100/101/075/articles/mp.jpg?v=1556340570420",
      text: "Sở chỉ huy chiến dịch Điện Biên Phủ",
    },
    {
      id: 8,
      uri: "https://file.qdnd.vn/data/images/0/2019/05/07/vuhuyen/2912018huyen10996g.jpg?dpi=150&quality=100&w=575",
      text: "Tường đài Kéo pháo",
    },
    {
      id: 9,
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Thanhbanphu.jpg/330px-Thanhbanphu.jpg",
      text: "Thành Bản Phủ (đền thờ Hoàng Công Chất)",
    },
  ]);

  const itemsPerRow = 2;
  // const itemsPerPage = 4;
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerRow);

  // const goToPage = (page : number ) => {
  //   setCurrentPage(page);
  // };

  const renderImageItem = ({
    item,
  }: {
    item: { id: number; uri: string; text: string };
  }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.text}> {item.text}</Text>
    </View>
  );

  // const renderPaginationButtons = () => {
  //   const buttons = [];

  //   // Nút trang đầu
  //   if(currentPage > 2){
  //       buttons.push(
  //       <Button
  //           key="first"
  //           title="1"
  //           onPress={() => goToPage(1)}
  //           disabled={currentPage === 1}
  //           color="gray"
  //       />
  //       );
  //   }

  //   // Nút trang trước
  //   if (currentPage > 3) {
  //     buttons.push(
  //       <Button
  //         key="previous"
  //         title="..."
  //         onPress={() => goToPage(currentPage - 1)}
  //         color="gray"
  //       />
  //     );
  //   }

  //   // Nút các trang
  //   for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
  //     buttons.push(
  //       <Button
  //         key={i}
  //         title={`${i}`}
  //         onPress={() => goToPage(i)}
  //         disabled={currentPage === i}
  //         color="gray"
  //       />
  //     );
  //   }

  //   // Nút trang sau
  //   if (currentPage < totalPages - 2) {
  //     buttons.push(
  //       <Button
  //         key="next"
  //         title="..."
  //         onPress={() => goToPage(currentPage + 1)}
  //         color="gray"
  //       />
  //     );
  //   }

  //   // Nút trang cuối
  //   if (currentPage < totalPages - 1 ){
  //       buttons.push(
  //       <Button
  //           key="last"
  //           title={totalPages.toString()}
  //           onPress={() => goToPage(totalPages)}
  //           disabled={currentPage === totalPages}
  //           color="gray"
  //       />
  //       );
  //   }

  //   return buttons;
  // };

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
              placeholder="Nhập từ khóa..."
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
    marginTop: 20,
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
    // height: 1200,
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

export default Herritage;
