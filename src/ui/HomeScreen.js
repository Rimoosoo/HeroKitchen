import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

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
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.zeroContainer}>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 10,
          }}
          onPress={() => {
            navigation.navigate("DeliveryScreen");
          }}
        >
          <MaterialIcon name="home-edit" size={50} color="black" />
        </Pressable>
        <Text style={{ fontFamily: "gowun", fontSize: 20, paddingLeft: 10 }}>
          서울 양천구 신정3동
        </Text>
      </View>
      <View style={styles.firstContainer}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate("StoreIntroduce", { brand: brands[0] });
          }}
        >
          <Text style={styles.normalText}>우나기 맨숀</Text>
        </Pressable>
      </View>
      <View style={styles.secondContainer}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate("StoreIntroduce", { brand: brands[1] });
          }}
        >
          <Text style={styles.normalText}>대창을 덮다</Text>
        </Pressable>
      </View>
      <View style={styles.thirdContainer}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate("StoreIntroduce", { brand: brands[2] });
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
