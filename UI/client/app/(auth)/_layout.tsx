import { Link, Tabs } from "expo-router";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import CommentForm from "../comments/comment";

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={"#fff"} />
    </Pressable>
  );
};
export const CommentButton = () => {
  return (
    <Link href="/comments/comment" asChild>
      <TouchableOpacity style={{ marginRight: 15 }}>
        <FontAwesome name="commenting" size={24} color="white" />
      </TouchableOpacity>
    </Link>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFC909",
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#FFC909",
        tabBarStyle: {
          borderWidth: 0,
          borderRadius: 0,
          height: 70,
          paddingBottom: 10,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="herritage"
        options={{
          headerTitle: "Di tích",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="temple-buddhist" size={size} color={color} />
          ),
          tabBarLabel: "Di tích",
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="festival"
        options={{
          headerTitle: "Sự kiện",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar-day" size={24} color={color} />
          ),
          tabBarLabel: "Sự kiện",
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerRight: () => <CommentButton />,
          headerTitle: "Trang chủ",
          headerTitleStyle: {
            fontSize: 22,
          },
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size + 3} color={color} />
          ),
          tabBarLabel: "Trang chủ",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerTitleAlign: "center",
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="service"
        options={{
          headerTitle: "Dịch vụ",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore1" size={size} color={color} />
          ),
          tabBarLabel: "Dịch vụ",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "CÁ NHÂN",
          headerShown: false,
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarLabel: "Cá nhân",
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
