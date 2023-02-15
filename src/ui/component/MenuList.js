import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuListItem from "./MenuListItem";
import Colors from "../../../assets/Colors";
import Menus from "../../../assets/menu/unagi";
import MenuListItemHeader from "./MenuListItemHeader";

function MenuList({ route, navigation }) {
  const { brand } = route.params;
  const { width, height } = useWindowDimensions();

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
      <View style={[styles.lowerContainer]}>
        <FlatList
          data={Menus}
          renderItem={({ item }) => {
            return <MenuListItem menu={item} />;
          }}
          ItemSeparatorComponent={
            <View style={{ borderBottomColor: "black", borderWidth: 1 }} />
          }
          ListHeaderComponent={<MenuListItemHeader />}
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{
            alignItems: "center",
            flex: 1,
          }}
        />
      </View>
    </View>
  );
}

export default MenuList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.componentColor.background,
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.componentColor.viewBox,
    paddingLeft: 10,
  },
  lowerContainer: {
    flex: 9,
    alignItems: "center",
  },
});
