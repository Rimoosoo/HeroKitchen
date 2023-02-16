import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Colors from "../../../../assets/Colors";
import Menus from "../../../../assets/menu/unagi";
import FoodContainer from "../FoodContainer";

const brand = {
  brandName: "뚝도 양조장",
  star: 4.7,
  category: "korean-japanese",
  deliveryFee: 3000,
  deliveryTime: 40,
  minimumOrder: 15000,
  picture: require("../../../../assets/image/unagi/food1.jpg"),
};

function StoreIntroduce() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={{ flex: 1 }}>
          <Image
            source={brand.picture}
            resizeMode="cover"
            style={{ flex: 1 }}
          />
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.second1Container}>
          <Text style={[styles.normalText, styles.boldText]}>
            {brand.brandName}
          </Text>
          <View style={styles.storeDetailContainer}>
            <View style={styles.starContainer}>
              <EntypoIcon name="star" size={25} color="#E34234" />
              <Text style={[styles.normalText, { fontSize: 20 }]}>
                {brand.star}
              </Text>
              <Text>(45)</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text
                style={[
                  styles.normalText,
                  { fontSize: 15, fontFamily: "gowun" },
                ]}
              >
                {brand.category}
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ fontFamily: "gowun" }}>
              오늘의 배달비 : {brand.deliveryFee} - 할인이 적용되었어요
            </Text>
            <Text style={{ fontFamily: "gowun" }}>
              최소주문금액: {brand.minimumOrder}
            </Text>
          </View>
        </View>
        <View style={styles.second2Container}>
          <View style={styles.second2IconContainer1}>
            <Text>Delivery</Text>
          </View>
          <View style={styles.second2IconContainer2}>
            <Text>Pick-up</Text>
          </View>
        </View>
        <View style={styles.second3Container}>
          <Text style={{ fontFamily: "gowun" }}>예상 소요시간</Text>
          <Text style={{ fontFamily: "gowun" }}>
            {brand.deliveryTime} - {brand.deliveryTime + 10}분
          </Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <FlatList
          horizontal={true}
          data={Menus}
          style={{ flex: 1 }}
          ItemSeparatorComponent={
            <View
              style={{
                width: 20,
              }}
            />
          }
          renderItem={({ item }) => {
            return (
              <View>
                <FoodContainer menu={item} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default StoreIntroduce;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    flex: 1.8,
    borderBottomWidth: 3,
    borderBottomColor: "gray",
  },
  secondContainer: {
    flex: 4,
    backgroundColor: "white",
  },
  thirdContainer: {
    flex: 5,
  },
  //
  second1Container: {
    flex: 2,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
  },
  second2Container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  second3Container: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  //
  storeDetailContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  second2IconContainer1: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: Colors.basicColor.orange,
    borderRadius: 30,
  },
  second2IconContainer2: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: Colors.componentColor.viewBox,
    borderRadius: 30,
  },
  foodContainer: {
    flex: 1,
  },
  //
  normalText: {
    fontSize: 30,
    fontFamily: "black-sans",
  },
  boldText: {
    fontWeight: "bold",
  },
});
