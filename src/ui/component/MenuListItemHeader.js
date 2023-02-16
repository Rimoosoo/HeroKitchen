import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../../assets/Colors";

function MenuListItemHeader() {
  return (
    <View style={styles.container}>
      <Text style={[styles.normalText, styles.boldText]}>메뉴판</Text>
    </View>
  );
}

export default MenuListItemHeader;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    width: "80%",
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.componentColor.viewBox,
  },
  //
  normalText: {
    fontSize: 30,
  },
  boldText: {
    fontWeight: "bold",
  },
});
