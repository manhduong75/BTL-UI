import React from "react";
import { Stack } from "expo-router";

const ServiceLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2E82FF",
        },
        headerTintColor: "#fff",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Dịch vụ",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="food"
        options={{
          headerTitle: "Ẩm thực",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="electricCar"
        options={{
          headerTitle: "Xe điện",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="ticket"
        options={{
          headerTitle: "Vé diện tử",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="photo"
        options={{
          headerTitle: "Chụp ảnh",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="tour"
        options={{
          headerTitle: "Hướng dẫn tour",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default ServiceLayout;
