import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { defaultStyles } from "../../../constants/Styles";
import {
  Ionicons,
  Fontisto,
  EvilIcons,
  FontAwesome6,
  Entypo,
} from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { Link } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const { signOut, isSignedIn } = useAuth();
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [edit, setEdit] = useState(false);

  // Load user data on mount
  useEffect(() => {
    if (!user) {
      return;
    }

    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.emailAddresses[0].emailAddress);
  }, [user]);

  // Update Clerk user data
  const onSaveUser = async () => {
    try {
      await user?.update({
        firstName: firstName!,
        lastName: lastName!,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setEdit(false);
    }
  };

  // Capture image from camera roll
  // Upload to Clerk as avatar
  const onCaptureImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.75,
      base64: true,
    });

    if (!result.canceled) {
      const base64 = `avatar/png;base64,${result.assets[0].base64}`;
      user?.setProfileImage({
        file: base64,
      });
    }
  };

  return (
    <SafeAreaView style={defaultStyles.container}>
      {user && (
        <View style={styles.card}>
          <TouchableOpacity onPress={onCaptureImage}>
            <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {!edit && (
              <View style={styles.editRow}>
                <Text style={{ fontSize: 22 }}>
                  {firstName} {lastName}
                </Text>
                <TouchableOpacity onPress={() => setEdit(true)}>
                  <Ionicons
                    name="create-outline"
                    size={24}
                    color={Colors.dark}
                  />
                </TouchableOpacity>
              </View>
            )}
            {edit && (
              <View style={styles.editRow}>
                <TextInput
                  placeholder="Họ"
                  value={firstName || ""}
                  onChangeText={setFirstName}
                  style={[defaultStyles.inputField, { width: 100 }]}
                />
                <TextInput
                  placeholder="Tên"
                  value={lastName || ""}
                  onChangeText={setLastName}
                  style={[defaultStyles.inputField, { width: 100 }]}
                />
                <TouchableOpacity onPress={onSaveUser}>
                  <Ionicons
                    name="checkmark-outline"
                    size={24}
                    color={"#2E82FF"}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <Text>{email}</Text>
          <Text>Tạo lúc: {user?.createdAt!.toLocaleDateString()}</Text>
        </View>
      )}

      {isSignedIn && (
        <View style={styles.card}>
          <Text style={styles.header}>Cài đặt</Text>
          <Link href={"/personal/changePassword"} asChild>
            <TouchableOpacity style={styles.option}>
              <View style={styles.icon}>
                <Fontisto name="locked" size={24} color="#EB841C" />
              </View>
              <View style={styles.title}>
                <Text>Đổi mật khẩu</Text>
                <EvilIcons name="chevron-right" size={30} color="grey" />
              </View>
            </TouchableOpacity>
          </Link>
          <Link href={"/personal/deleteAccount"} asChild>
            <TouchableOpacity style={styles.option}>
              <View style={styles.icon}>
                <FontAwesome6 name="delete-left" size={22} color="#EB841C" />
              </View>
              <View style={styles.title}>
                <Text>Xóa tài khoản</Text>
                <EvilIcons name="chevron-right" size={30} color="grey" />
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.option} onPress={() => signOut()}>
            <View style={styles.icon}>
              <Entypo name="log-out" size={24} color="#EB841C" />
            </View>
            <View style={styles.title}>
              <Text>Đăng xuất</Text>
              <EvilIcons name="chevron-right" size={30} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  header: {
    fontSize: 22,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  editRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logOut: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 40,
    borderRadius: 8,
    backgroundColor: "#2E82FF",
    alignSelf: "center",
  },
  frame: {
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#fff",
  },
  icon: { width: 30, alignItems: "center" },
  title: {
    flexDirection: "row",
    flex: 1,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 16,
    marginLeft: 12,
    borderBottomColor: "#dedfe0",
    borderBottomWidth: 1,
  },
});

export default Profile;
