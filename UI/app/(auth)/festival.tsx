import React, { useState } from "react";
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
import { Colors } from "react-native/Libraries/NewAppScreen";

const Festival = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Giá trị searchText:", searchText);
  };

  const [data] = useState([
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
  ]);

  // const itemsPerPage = 4;
  const itemsPerRow = 2;
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
      <TouchableOpacity>
        <Image source={{ uri: item.uri }} style={styles.image} />
        <Text style={styles.text}> {item.text}</Text>
      </TouchableOpacity>
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

export default Festival;
