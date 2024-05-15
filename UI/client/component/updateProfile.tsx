import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-expo";
import React from "react";

const updateProfile = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);

  const onSaveUser = async () => {
    try {
      await user?.update({
        firstName: firstName!,
        lastName: lastName!,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        {user?.firstName} {user?.lastName}!
      </Text>

      <TextInput
        placeholder="Họ"
        value={firstName || ""}
        onChangeText={setFirstName}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Tên"
        value={lastName || ""}
        onChangeText={setLastName}
        style={styles.inputField}
      />
      <Button
        onPress={onSaveUser}
        title="Cập nhật tài khoản"
        color={"#2E82FF"}
      ></Button>
    </View>
  );
};

export default updateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
