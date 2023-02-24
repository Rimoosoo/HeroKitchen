import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
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
function HomeScreen({ route }) {
  SplashScreen.preventAutoHideAsync();

  const navigator = useNavigation();
  const { height } = Dimensions.get("window");
  const woodImage = route.params.images.homeScreen.wood;
  const menuBackground = route.params.images.homeScreen.menuBackground;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <MaterialIcon name="home-edit" size={50} color="black" />
        </Pressable>
        <Text
          style={{
            fontFamily: "gowun",
            fontSize: 20,
            paddingLeft: 10,
            color: "black",
          }}
        >
          서울 양천구 신정3동
        </Text>
      </View>
      <View style={styles.container}>
        <ImageBackground
          source={menuBackground}
          style={{ width: "100%", height: "100%", flexDirection: "row" }}
          resizeMode="stretch"
        >
          <View style={styles.firstContainer}>
            <Pressable
              style={styles.itemContainer}
              onPress={() => {
                navigator.navigate("StoreIntroduce", { brand: brands[0] });
              }}
            >
              <ImageBackground
                source={woodImage}
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onLoadEnd={() => {
                  setIsImageLoaded(true);
                  console.log("image load finish");
                  SplashScreen.hideAsync();
                }}
              >
                <Text style={[styles.normalText, { textAlign: "center" }]}>
                  우{"\n"}나{"\n"}기{"\n"}맨{"\n"}숀
                </Text>
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
                source={woodImage}
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={[styles.normalText, { textAlign: "center" }]}>
                  대{"\n"}창{"\n"}을{"\n"}덮{"\n"}다
                </Text>
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
                source={woodImage}
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 40,
                }}
              >
                <Text
                  style={[
                    styles.normalText,
                    {
                      textAlign: "center",
                    },
                  ]}
                >
                  뚝{"\n"}도{"\n"}양{"\n"}조{"\n"}장
                </Text>
              </ImageBackground>
            </Pressable>
          </View>
          <Text
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              fontSize: 40,
              fontFamily: "eastSea",
              letterSpacing: 3,
              color: "white",
            }}
          >
            hero kitchen
          </Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 11,
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  secondContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  thirdContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "70%",
    backgroundColor: Colors.componentColor.viewBox,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    borderColor: "black",
    borderWidth: 1,
  },
  //
  //
  normalText: {
    color: "black",
    fontSize: 60,
    fontFamily: "eastSea",
  },
});
