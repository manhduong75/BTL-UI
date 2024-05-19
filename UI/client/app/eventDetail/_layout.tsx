import React from "react";
import { Stack } from "expo-router";

const EventDetailsLayout = () => {
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
          headerTitle: "Sự kiện",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
    
  );
};

export default EventDetailsLayout;
