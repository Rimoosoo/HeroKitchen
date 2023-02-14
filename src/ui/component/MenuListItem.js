import React from "react";
import { StyleSheet, View } from "react-native";

function MenuListItem() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  lowerContainer: {
    flex: 7,
  },
});
