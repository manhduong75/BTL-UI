import React from "react";
import { Stack } from "expo-router";

const HerritageLayout = () => {
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
          headerTitle: "Di tích",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "Di tích",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default HerritageLayout;
