import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const events = [
  {
    id: 1,
    title: "Lễ hội Hoa Ban",
    image:
      "https://vnmedia.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/8a10a0d36d961641016db9c9fa273c32/022022/1_20220214152059.jpg",
  },
  {
    id: 2,
    title: "Lễ hội Hoa Anh Đào",
    image:
      "https://afamilycdn.com/150157425591193600/2023/12/10/3281055004221258734345941997230514713636857n-1-1702166075638480154269-1702178556587-17021785579251079420961.jpg",
  },
  {
    id: 3,
    title: "Chợ phiên Tủa Chùa",
    image: "https://i.ytimg.com/vi/DDvNhP-R0eY/sddefault.jpg",
  },
  {
    id: 4,
    title: "Lễ hội Thành Bản Phù",
    image: "https://baovanhoa.vn/Portals/0/EasyDNNnews/51472/A1.jpg",
  },
  {
    id: 5,
    title: "Kỷ niệm chiến thắng Điện Biên Phủ",
    image: "https://mediafile.qdnd.vn//images/2024/3/12/cover-3.jpg",
  },
  {
    id: 6,
    title: "Tết cổ truyền",
    image: "https://gdtd.1cdn.vn/2023/11/28/khong-khi-tet.jpeg",
  },
  {
    id: 7,
    title: "Hương sắc Điện Biên",
    image:
      "https://imagev3.dantocmiennui.vn/w1000/Uploaddtmn/2017/3/17/85-1.JPG",
  },
];

const EventDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const eventId = Array.isArray(id) ? id[0] : id;
  const event = events.find((e) => e.id === parseInt(eventId, 10));

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sự kiện không tồn tại</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Image source={{ uri: event.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default EventDetailScreen;
