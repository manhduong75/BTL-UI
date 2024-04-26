import { Tabs } from "expo-router";
import { Ionicons, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

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

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2E82FF",
        },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="herritage"
        options={{
          headerTitle: "Di tích",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="temple-buddhist" size={size} color={color} />
          ),
          tabBarLabel: "Di tích",
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="festival"
        options={{
          headerTitle: "Sự kiện",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="event" size={size} color={color} />
          ),
          tabBarLabel: "Sự kiện",
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: "Trang chủ",
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="service"
        options={{
          headerTitle: "Dịch vụ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apps-outline" size={size} color={color} />
          ),
          tabBarLabel: "Dịch vụ",
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "My Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarLabel: "Cài đặt",
          headerRight: () => <LogoutButton />,
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
