import { Link, Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="changePassword"
        options={{
          headerTitle: "Đổi mật khẩu",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FFC909",
          },
        }}
      />
      <Stack.Screen
        name="deleteAccount"
        options={{
          headerTitle: "Lưu ý",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FFC909",
          },
        }}
      />
    </Stack>
  );
}
