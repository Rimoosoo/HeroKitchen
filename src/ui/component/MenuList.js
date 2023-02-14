import React, { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
function MenuList({ route, navigation }) {
  const { brand } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: brand,
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5,
          }}
        >
          <Icon name="home-edit" size={35} color="blue" />
        </View>
        <Text>서울 양천구 신정3동</Text>
      </View>
      <View style={styles.lowerContainer}></View>
    </View>
  );
}

export default MenuList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
  },
  lowerContainer: {
    flex: 9,
    backgroundColor: "blue",
  },
});
