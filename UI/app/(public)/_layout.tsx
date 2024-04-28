import React from "react";
import { Stack } from "expo-router";

const PublicLayout = () => {
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
        name="login"
        options={{
          headerTitle: "Di tích Điện Biên",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Tạo tài khoản",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="reset"
        options={{
          headerTitle: "Cài đặt lại mật khẩu",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default PublicLayout;
