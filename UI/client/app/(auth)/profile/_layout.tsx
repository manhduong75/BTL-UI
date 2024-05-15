import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { LogoutButton } from "../_layout";

const _layout = () => {
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
          headerTitle: "Cá nhân",
          headerTitleStyle: { fontSize: 22 },
          headerTitleAlign: "center",
          headerRight: () => <LogoutButton />,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default _layout;
