import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Colors from "../../../../assets/Colors";
import Menus from "../../../../assets/menu/unagi";
import FoodContainer from "../FoodContainer";

function StoreIntroduce({ route, navigation }) {
  const { brand } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: brand?.brandName,
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
        >
          <Image
            source={brand.picture}
            resizeMode="cover"
            style={{
              flex: 1,
              width: "100%",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.second1Container}>
          <Text style={[styles.normalText]}>{brand.brandName}</Text>
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
          <Pressable
            style={({ pressed }) => {
              return pressed
                ? [styles.second2IconContainer1, { backgroundColor: "red" }]
                : [styles.second2IconContainer1];
            }}
            onPress={() => {
              navigation.navigate("DeliveryScreen");
            }}
          >
            <Text>Delivery</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => {
              return pressed
                ? [styles.second2IconContainer2, { backgroundColor: "red" }]
                : [styles.second2IconContainer2];
            }}
            onPress={() => {
              navigation.navigate("PickupScreen");
            }}
          >
            <Text>Pick-up</Text>
          </Pressable>
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
                backgroundColor: "white",
              }}
            />
          }
          renderItem={({ item }) => {
            return (
              <View style={{ backgroundColor: "white" }}>
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
  },
  secondContainer: {
    flex: 5,
    backgroundColor: "white",
  },
  thirdContainer: {
    flex: 5,
    paddingBottom: 10,
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
    paddingTop: 15,
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
    fontFamily: "gowun",
  },
  boldText: {
    fontWeight: "bold",
  },
});
