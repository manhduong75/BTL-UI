import React from "react";
import { Stack } from "expo-router";

const CommentLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFC909",
        },
        headerTitleStyle: { fontSize: 22 },
        headerTintColor: "#fff",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="comment"></Stack.Screen>
    </Stack>
  );
};

export default CommentLayout;
