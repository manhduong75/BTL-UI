import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _listServiceLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFC909",
        },
        headerTintColor: "#fff",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="listFood"
        options={{
          headerShown: false,
          headerTitle: "Ẩm thực",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="electricCar"
        options={{
          headerTitle: "Xe điện",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="ticket"
        options={{
          headerTitle: "Vé diện tử",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="photo"
        options={{
          headerTitle: "Chụp ảnh",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="tour"
        options={{
          headerTitle: "Hướng dẫn tour",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default _listServiceLayout;
