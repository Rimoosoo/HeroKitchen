import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import Colors from "../../../assets/Colors";

const item = {
  menuName: "장어 데리야끼 구이 정식",
  price: 29900,
  detail: "장어2미 + 파/와사비 + 귀리밥 + 장어소스",
  image: require("../../../assets/image/unagi/food.jpg"),
};

function MenuListItem({ menu }) {
  return (
    <View style={[styles.container]}>
      <View style={styles.leftContainer}>
        <View style={styles.leftUpperContainer}>
          <Text style={[styles.normalText, styles.boldText]}>
            {menu.menuName}
          </Text>
          <Text>{menu.detail}</Text>
        </View>
        <View style={styles.leftLowerContainer}>
          <Text style={[styles.normalText, styles.boldText, { fontSize: 35 }]}>
            {menu.price}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={[{ width: "100%", height: "100%" }]}
          />
        </View>
        <View style={styles.iconContainer}>
          <AntIcon
            name="pluscircle"
            size={50}
            color={Colors.componentColor.plusBtn}
          />
        </View>
      </View>
    </View>
  );
}

export default MenuListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    marginBottom: 20,
    //ios
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    backgroundColor: Colors.componentColor.viewBox,
  },
  leftContainer: {
    flex: 7,
    justifyContent: "center",
    paddingLeft: 20,
  },
  rightContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  leftUpperContainer: {
    alignItems: "flex-start",
  },
  leftLowerContainer: {
    alignItems: "flex-start",
  },
  //
  imageContainer: {
    height: "70%",
    width: "90%",
    borderRadius: 10,
    overflow: "hidden",
  },
  iconContainer: {
    position: "absolute",
    top: -20,
    right: -10,
  },
  //
  normalText: {
    fontSize: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
});
