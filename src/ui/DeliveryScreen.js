import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import Colors from "../../assets/Colors";
function DeliveryScreen({ navigation }) {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [address, setAddress] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.upperView}>
        <MapView
          style={styles.map}
          initialRegion={location}
          // region={location}
          // onRegionChangeComplete={(newRegion) => {
          //   setTimeout(() => {
          //     setLocation(newRegion);
          //   }, 1000);
          // }}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          userLocationUpdateInterval={2000}
        ></MapView>
      </View>
      <View style={styles.lowerView}>
        <View style={styles.lowerFirstView}>
          <Text style={[styles.normalText, { fontSize: 20 }]}>
            주소를 입력해주세요
          </Text>
          <TextInput
            value={address}
            placeholder="주소를 입력해주세요"
            multiline={true}
            style={{
              height: 40,
              width: "80%",
              fontSize: 20,
              fontFamily: "gowun",
              flex: 1,
            }}
          />
        </View>
        <View style={styles.lowerSecondView}>
          <Pressable style={[styles.addressBtn]}>
            <Text style={{ fontFamily: "black-sans", fontSize: 20 }}>
              주소 입력 완료하기
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  upperView: {
    flex: 1,
  },
  lowerView: { flex: 1, alignItems: "center", marginTop: 20 },
  //
  lowerFirstView: {
    flex: 3,
    alignItems: "center",
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.componentColor.viewBox,
  },
  lowerSecondView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  //
  map: {
    width: "100%",
    height: "100%",
  },
  normalText: {
    fontFamily: "gowun",
  },
  addressBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "70%",
    backgroundColor: Colors.basicColor.orange,
    borderRadius: 30,
  },
});
