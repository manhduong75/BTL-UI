import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function ServiceItem(props: any) {
  return (
    <TouchableOpacity style={styles.item} onPress={props.onPress}>
      <View style={styles.containerIcon}>{props.icon()}</View>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#33EEFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  item: {
    height: 100,
    flexBasis: "33.333%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
