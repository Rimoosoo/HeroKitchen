import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate("MenuList", { brand: "우나기 맨숀" });
          }}
        >
          <Text style={styles.normalText}>우나기 맨숀</Text>
        </Pressable>
      </View>
      <View style={styles.secondContainer}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate("MenuList", { brand: "대창을 덮다" });
          }}
        >
          <Text style={styles.normalText}>대창을 덮다</Text>
        </Pressable>
      </View>
      <View style={styles.thirdContainer}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate("StoreIntroduce", { brand: "뚝도 양조장" });
          }}
        >
          <Text style={styles.normalText}>뚝도 양조장</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "50%",
    backgroundColor: "#80808040",
    borderRadius: 30,
  },
  //
  //
  normalText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "gowun",
  },
});
