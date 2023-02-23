import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../assets/Colors";
import * as SplashScreen from "expo-splash-screen";

const brands = [
  {
    brandName: "우나기 맨숀",
    star: 4.4,
    category: "korean-japanese",
    deliveryFee: 3000,
    deliveryTime: 40,
    minimumOrder: 15000,
    picture: require("../../assets/image/unagi/food1.jpg"),
  },
  {
    brandName: "대창을 덮다",
    star: 4.7,
    category: "japanese",
    deliveryFee: 3000,
    deliveryTime: 40,
    minimumOrder: 15000,
    picture: require("../../assets/image/unagi/food1.jpg"),
  },
  {
    brandName: "뚝도 양조장",
    star: 4.7,
    category: "korean-japanese",
    deliveryFee: 3000,
    deliveryTime: 40,
    minimumOrder: 15000,
    picture: require("../../assets/image/unagi/food1.jpg"),
  },
];
function HomeScreen() {
  const navigator = useNavigation();

  const onLayoutRootView = useCallback(async () => {
    if (menuImage) {
      await SplashScreen.hideAsync();
    }
  }, [menuImage]);

  if (!menuImage) {
    // font load error
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayoutRootView={onLayoutRootView}>
      <View style={styles.zeroContainer}>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 10,
          }}
          onPress={() => {
            navigator.navigate("DeliveryScreen");
          }}
        >
          <MaterialIcon name="home-edit" size={50} color="white" />
        </Pressable>
        <Text
          style={{
            fontFamily: "gowun",
            fontSize: 20,
            paddingLeft: 10,
            color: "white",
          }}
        >
          서울 양천구 신정3동
        </Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.firstContainer, {}]}>
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              navigator.navigate("StoreIntroduce", { brand: brands[0] });
            }}
          >
            <ImageBackground
              source={require("../../assets/image/wood.jpg")}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.normalText}>우나기 맨숀</Text>
            </ImageBackground>
          </Pressable>
        </View>
        <View style={styles.secondContainer}>
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              navigator.navigate("StoreIntroduce", { brand: brands[1] });
            }}
          >
            <ImageBackground
              source={require("../../assets/image/wood.jpg")}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={[styles.normalText]}>대창을 덮다</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.thirdContainer}>
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              navigator.navigate("StoreIntroduce", { brand: brands[2] });
            }}
          >
            <ImageBackground
              source={require("../../assets/image/wood.jpg")}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.normalText}>뚝도 양조장</Text>
            </ImageBackground>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "black",
    flexDirection: "row",
  },
  zeroContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
  },
  firstContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  secondContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "50%",
    backgroundColor: Colors.componentColor.viewBox,
    borderRadius: 30,
    overflow: "hidden",
  },
  //
  //
  normalText: {
    color: "white",
    fontSize: 40,
    fontFamily: "gowun",
  },
});
