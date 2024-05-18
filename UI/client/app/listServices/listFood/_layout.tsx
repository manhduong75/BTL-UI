import React from "react";
import { Stack } from "expo-router";
import FoodDetail from "./[id]";
import Food from "./food";

const FoodLayout = () => {
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
        name="food"
        options={{
          headerTitle: "Ẩm thực",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "Chi tiết món ăn",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default FoodLayout;
