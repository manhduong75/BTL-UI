import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

const herritages = [
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
      uri: require("../../../assets/Heritage/Thanh_ban_phu.jpg"),
      text: "Thành Bản Phủ (đền thờ Hoàng Công Chất)",
    },
  ];

const HerritageDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const herritageId = Array.isArray(id) ? id[0] : id;
  const herritage = herritages.find((e) => e.id === parseInt(herritageId, 10));

  if (!herritage) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sự kiện không tồn tại</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={herritage.uri } style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.head}> {herritage.text} </Text>
        <Text style={styles.body}>
        {herritage.text}
        </Text>
      </View>
      </ScrollView>
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
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  info: {},
  head: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    margin: 20,
    color: "#3e8ded",
  },
  body: {
    fontSize: 17,
    lineHeight: 30,
    marginHorizontal: 20,
  },
});

export default HerritageDetailScreen;
