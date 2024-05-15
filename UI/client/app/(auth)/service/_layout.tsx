import React from "react";
import { Stack } from "expo-router";

const ServiceLayout = () => {
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
          headerTitle: "Dịch vụ",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 22 },
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default ServiceLayout;
