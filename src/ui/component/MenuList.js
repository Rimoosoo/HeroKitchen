import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MenuListItem from "./MenuListItem";
import Colors from "../../../assets/Colors";
import Menus from "../../../assets/menu/unagi";
import MenuListItemHeader from "./MenuListItemHeader";
import OrderModal from "./OrderModal";

function MenuList({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
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
          <MaterialIcon name="home-edit" size={35} color="blue" />
        </View>
        <Text>서울 양천구 신정3동</Text>
      </View>
      <View style={[styles.lowerContainer]}>
        <FlatList
          data={Menus}
          renderItem={({ item }) => {
            return (
              <View>
                <MenuListItem menu={item} />
              </View>
            );
          }}
          ItemSeparatorComponent={
            <View style={{ borderBottomColor: "black", borderWidth: 1 }} />
          }
          ListHeaderComponent={<MenuListItemHeader />}
          style={styles.flatListContainer}
        />
      </View>
      {modalVisible && (
        <OrderModal visible={modalVisible} setVisible={setModalVisible} />
      )}
      <EntypoIcon
        name="shopping-cart"
        size={40}
        color={Colors.basicColor.blue}
      />
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
    width: "100%",
  },
  //
  flatListContainer: {
    flex: 1,
    width: "100%",
  },
});
