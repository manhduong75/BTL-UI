import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { LogoutButton } from "../_layout";

const _layout = () => {
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
          headerTitle: "Cá nhân",
          headerTitleAlign: "center",
          headerRight: () => <LogoutButton />,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default _layout;
