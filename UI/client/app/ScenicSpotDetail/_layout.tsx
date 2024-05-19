import React from "react";
import { Stack } from "expo-router";

const ScenicSpotDetailLayout = () => {
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
        name="[id]"
        options={{
          headerTitle: "Danh lam thắng cảnh",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
    
  );
};

export default ScenicSpotDetailLayout;
