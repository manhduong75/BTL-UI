import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Modal, View } from "react-native";
import { Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type Service = {
  text: string;
  price: string;
};

type Props = {
  serviceName: string;
  services: Service[];
};

const PriceButton = ({ serviceName, services }: Props) => {
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
        <FontAwesome5 name="money-check-alt" size={24} color="#10bfde" />
        <Text style={styles.title}>GIÁ VÉ</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.head}>{serviceName}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
            {services.map((service, index) => (
              <Text key={index} style={styles.body}>
                {index + 1}. {service.text}
                <Text style={styles.price}> {service.price} </Text>
                đồng/người/lượt
              </Text>
            ))}
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
    borderColor: "#10bfde",
    borderWidth: 1,
    height: 50,
  },
  title: {
    color: "#10bfde",
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
    position: "absolute",
    margin: 20,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 35,
    width: "100%",
    height: "80%",
    bottom: -30,
  },
  closeButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
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
  },
  close: {
    color: "grey",
    fontSize: 27,
  },
  body: {
    fontSize: 16,
    lineHeight: 30,
    marginHorizontal: 0,
  },
  price: {
    color: "red",
  },
});

export default PriceButton;
