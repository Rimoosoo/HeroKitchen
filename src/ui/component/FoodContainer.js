import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../../assets/Colors";

function FoodContainer({ menu, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text
          style={{ fontFamily: "black-sans", fontSize: 20, color: "black" }}
        >
          {menu.menuName}
        </Text>
        <Text style={{ fontFamily: "gowun", fontSize: 16 }}>{menu.detail}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} resizeMode="cover" />
        </View>
      </View>
    </View>
  );
}

export default FoodContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Colors.componentColor.viewBox,
    padding: 10,
  },
  upperContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  lowerContainer: {
    flex: 4,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  //
  imageContainer: {
    width: "95%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 20,
  },
});
