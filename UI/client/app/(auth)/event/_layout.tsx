import React from "react";
import { Stack } from "expo-router";

const EventLayout = () => {
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
        name="index"
        options={{
          headerTitle: "Sự kiện",
          headerShown: false,
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "Chi tiết Sự kiện",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default EventLayout;
