import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

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

const Event = () => {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => router.push(`/event/${item.id}`)}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
});

export default Event;
