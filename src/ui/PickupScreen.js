import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Animated,
  useWindowDimensions,
  TouchableWithoutFeedback,
  SafeAreaView,
  Pressable,
} from "react-native";
import Colors from "../../assets/Colors";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const orderedList = [
  { name: "히츠마부시", price: 12900, quantity: 2 },
  { name: "연어덮밥", price: 15000, quantity: 3 },
  { name: "히츠마부시", price: 12900, quantity: 2 },
  { name: "연어덮밥", price: 15000, quantity: 3 },
  { name: "히츠마부시", price: 12900, quantity: 2 },
  { name: "연어덮밥", price: 15000, quantity: 3 },
  { name: "히츠마부시", price: 12900, quantity: 2 },
  { name: "연어덮밥", price: 15000, quantity: 3 },
  { name: "히츠마부시", price: 12900, quantity: 2 },
  { name: "연어덮밥", price: 15000, quantity: 3 },
  { name: "히츠마부시", price: 12900, quantity: 2 },
  { name: "연어덮밥", price: 15000, quantity: 3 },
  { name: "히츠마부시", price: 12900, quantity: 2 },
  { name: "연어덮밥", price: 15000, quantity: 3 },
  { name: "히츠마부시", price: 12900, quantity: 2 },
  { name: "연어덮밥", price: 15000, quantity: 3 },
];

function PickupScreen({ navigation }) {
  const bicycle = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let priceTemp = 0;
    orderedList.forEach((item, index) => {
      priceTemp = priceTemp + item.price * item.quantity;
    });
    setPrice(priceTemp);
    console.log(priceTemp);
  }, [orderedList]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  });

  function deliveryStart() {
    Animated.timing(bicycle, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(bicycle, {
        toValue: 0,
        friction: 2,
        tension: 80,
        useNativeDriver: true,
      }).start();
    });
  }

  useEffect(() => {
    deliveryStart();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.upperContainer]}>
        <View style={styles.upperItemContainer}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "gowun",
                fontWeight: "400",
                paddingBottom: 4,
              }}
            >
              주문이 접수되었습니다
            </Text>

            <Text
              style={{
                fontSize: 12,
                fontFamily: "gowun",
              }}
            >
              고객님의 주문이 40분 내에 조리완료됩니다 :)
            </Text>
          </View>

          <View style={[styles.iconContainer, { flex: 1 }]}>
            <Animated.View
              style={[
                styles.deliveryIcon,
                {
                  transform: [
                    {
                      translateX: bicycle.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, width],
                      }),
                    },
                  ],
                },
              ]}
            >
              <MaterialIcon name="delivery-dining" size={70} color="black" />
            </Animated.View>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.lowerItemContainer}>
          <ScrollView
            style={styles.lowerScrollView}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  borderBottomColor: "gray",
                  width: "100%",
                }}
              >
                <Text
                  style={[
                    styles.normalText,
                    {
                      fontSize: 25,
                    },
                  ]}
                >
                  정민희님의 주문내역
                </Text>
              </View>

              <View
                style={{
                  alignItems: "center",
                  paddingVertical: 20,
                }}
              >
                {orderedList.map((item, index) => {
                  return (
                    <Text
                      style={[styles.normalText, { fontSize: 20 }]}
                      key={index}
                    >
                      {item.name} {item.quantity}개
                    </Text>
                  );
                })}
              </View>
            </View>
          </ScrollView>
          <View>
            <Text style={[styles.normalText, { fontSize: 18 }]}>
              주문 총액 {price}원
            </Text>
          </View>
        </View>
        <View style={styles.lowerBtnContainer}>
          <Pressable
            style={styles.lowerBtn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: "gowun" }}>
              홈으로 돌아가기
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PickupScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  upperContainer: {
    flex: 2,
  },
  lowerContainer: {
    flex: 6,
    backgroundColor: Colors.componentColor.viewBox,
  },
  //
  upperItemContainer: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: Colors.componentColor.viewBox,
  },
  lowerItemContainer: {
    flex: 5,
    alignItems: "center",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "white",
  },
  lowerScrollView: {
    width: "100%",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingTop: 20,
  },
  lowerBtnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: "white",
  },
  //
  iconContainer: {
    width: "100%",
  },
  lowerBtn: {
    width: "90%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: Colors.componentColor.viewBox2,
  },
  //
  normalText: {
    fontFamily: "gowun",
  },
});
