import React from "react";
import { Stack } from "expo-router";

const HerritageDetailsLayout = () => {
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
          headerTitle: "Di tích",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
    
  );
};

export default HerritageDetailsLayout;
