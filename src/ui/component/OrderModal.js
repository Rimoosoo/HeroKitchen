import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
function OrderModal({ visible, setVisible }) {
  return (
    <Modal style={styles.modalContainer}>
      <View style={styles.viewContainer}>
        <Text>modal</Text>
      </View>
    </Modal>
  );
}

export default OrderModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  viewContainer: {},
});
