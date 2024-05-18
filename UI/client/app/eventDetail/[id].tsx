import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
const { width: screenWidth } = Dimensions.get("window");
import events from "../data/HerirtageData";
import { useNavigation, useRoute } from "@react-navigation/native";


const EventDetailScreen = () => {
  const id = useGlobalSearchParams().id;
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
      <ScrollView>
      <Image source={event.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.head}> {event.title} </Text>
          {event.text.map((segment, index) => (
            <Text style={styles.text} key={index}>{segment}</Text>
          ))}
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
    // padding: 10,
  },
  image: {
    width: screenWidth,
    height: 250,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  info: {
    marginBottom: 20,
  },
  head: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    margin: 20,
    color: "#3e8ded",
  },
  text: {
    fontSize: 17,
    lineHeight: 30,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: "justify",
  },
});

export default EventDetailScreen;
