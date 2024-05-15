import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Modal, View } from "react-native";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo, Fontisto, Feather } from "@expo/vector-icons";

const ContactButton = (props: {
  locationText: string;
  phoneText: string;
  emailText: string;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <MaterialIcons name="contact-phone" size={28} color="#e63119" />
        <Text style={styles.title}>LIÊN HỆ</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.head}>LIÊN HỆ</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
            <View style={styles.list}>
              <View style={styles.infoContact}>
                <Entypo name="location" size={20} color="red" />
                <Text style={{ marginLeft: 8 }}>{props.locationText}</Text>
              </View>
              <View style={styles.infoContact}>
                <Feather name="phone-call" size={20} color="#22b3e3" />
                <Text style={{ marginLeft: 8 }}>{props.phoneText}</Text>
              </View>
              <View style={styles.infoContact}>
                <Fontisto name="email" size={20} color="#ebbd28" />
                <Text style={{ marginLeft: 8 }}>{props.emailText}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 160,
    padding: 10,
    borderRadius: 30,
    borderColor: "#e63119",
    borderWidth: 1,
    height: 50,
  },
  title: {
    color: "#e63119",
    fontWeight: "bold",
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "70%",
    height: "30%",
  },
  closeButton: {
    backgroundColor: "#fff",
    padding: 10,
    position: "absolute",
    right: 10,
    top: 10,
  },
  head: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    margin: 10,
    color: "#3e8ded",
    marginBottom: 20,
  },
  close: {
    color: "grey",
    fontSize: 27,
  },
  list: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  infoContact: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
});

export default ContactButton;
