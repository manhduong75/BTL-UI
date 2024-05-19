import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import ContactButton from "../../component/contactButton";
import PriceButton from "../../component/priceButton";

const images = [
  "https://image.nhandan.vn/Uploaded/2024/pile/2023_05_06/ndo_br_1-8438.jpg",
  "https://dienbientv.vn/dataimages/201504/original/images1053952_IMG_1127.jpg",
  "https://media.vov.vn/sites/default/files/styles/large/public/2021-05/doi-a1-1.jpg",
];

const windowWidth = Dimensions.get("window").width;

const Tour = () => {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<ScrollView | null>(null);

  const change = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        onScroll={change}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        onMomentumScrollEnd={(ev) => {
          if (
            ev.nativeEvent.contentOffset.x === 0 &&
            active === images.length - 1
          ) {
            scrollRef.current?.scrollTo({ x: windowWidth, animated: true });
          } else if (
            ev.nativeEvent.contentOffset.x ===
              windowWidth * (images.length - 1) &&
            active === 0
          ) {
            scrollRef.current?.scrollTo({ x: 0, animated: true });
          }
        }}
      >
        {images.map((image, index) => (
          <Image key={index} style={styles.image} source={{ uri: image }} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, k) => (
          <TouchableOpacity
            key={k}
            onPress={() =>
              scrollRef.current?.scrollTo({
                x: k * windowWidth,
                animated: true,
              })
            }
          >
            <Text
              style={k == active ? styles.pagingActiveText : styles.pagingText}
            >
              ⬤
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.title}>
        <PriceButton
          serviceName="DỊCH VỤ ĐẶT HƯỚNG DẪN VIÊN"
          services={[
            { text: "Vé cho khách trong nước", price: "500.000" },
            { text: "Vé cho khách quốc tế", price: "1.000.000" },
          ]}
        />
        <ContactButton
          locationText="Thành Phố Điện Biên"
          phoneText="+84 0987654321"
          emailText="andrew@gmail.com"
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.head}>Dịch vụ đặt hướng dẫn tour</Text>
        <Text style={styles.body}>
          Dịch vụ đặt hướng dẫn tour (Guild tour) cung cấp các hướng dẫn viên du
          lịch cho các đoàn khách tham quan. Dịch vụ cung cấp cả các hướng dẫn
          viên cho đoàn khách nước ngoài với ngôn ngữ chính được sử dụng là
          tiếng anh.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: windowWidth },
  scroll: { width: windowWidth, height: 200 },
  image: { width: windowWidth, height: 200 },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    top: 210,
    alignSelf: "center",
  },
  pagingText: { fontSize: windowWidth / 30, color: "#c6cacc", margin: 3 },
  pagingActiveText: { fontSize: windowWidth / 30, color: "#EB841C", margin: 3 },
  title: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  info: {},
  head: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    margin: 20,
    color: "#EB841C",
  },
  body: {
    fontSize: 17,
    lineHeight: 30,
    marginHorizontal: 20,
  },
});

export default Tour;
