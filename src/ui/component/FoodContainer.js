import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function FoodContainer({ menu }) {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={{ fontFamily: "gowun", fontSize: 20, color: "white" }}>
          {menu.menuName}
        </Text>
        <Text>{menu.detail}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/image/unagi/food1.jpg")}
            resizeMode="cover"
          />
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
    backgroundColor: "gray",
    padding: 10,
  },
  upperContainer: {
    flex: 2,
    alignItems: "center",
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
