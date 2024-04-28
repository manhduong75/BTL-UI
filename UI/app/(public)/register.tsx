import { Button, TextInput, View, StyleSheet } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import Spinner from "react-native-loading-spinner-overlay";
import { useState } from "react";
import { Stack } from "expo-router";

const register = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      // Create the user on Clerk
      await signUp.create({
        emailAddress,
        lastName,
        firstName,
        password,
      });

      // Send verification Email
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to verify the email address
      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />
      <Spinner visible={loading} />

      {!pendingVerification && (
        <>
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            value={emailAddress}
            onChangeText={setEmailAddress}
            style={styles.inputField}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Họ"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.inputField}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Tên"
            value={lastName}
            onChangeText={setLastName}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputField}
          />

          <View style={styles.button}>
            <Button
              onPress={onSignUpPress}
              title="Đăng ký"
              color={"#2E82FF"}
            ></Button>
          </View>
        </>
      )}

      {pendingVerification && (
        <>
          <View>
            <TextInput
              value={code}
              placeholder="Mã xác thực..."
              style={styles.inputField}
              onChangeText={setCode}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={onPressVerify}
              title="Xác thực Email"
              color={"#2E82FF"}
            ></Button>
          </View>
        </>
      )}
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 8,
    height: 50,
    borderWidth: 1,
    borderColor: "#2E82FF",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginVertical: 8,
    borderRadius: 8,
  },
});
