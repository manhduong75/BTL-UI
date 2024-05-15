import React from "react";
import { Stack } from "expo-router";

const PublicLayout = () => {
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
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Di tích Điện Biên",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Tạo tài khoản",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="reset"
        options={{
          headerTitle: "Cài đặt lại mật khẩu",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default PublicLayout;
