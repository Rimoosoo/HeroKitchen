import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "black-sans": require("./assets/font/BlackHanSans-Regular.ttf"),
    gowun: require("./assets/font/GowunDodum-Regular.ttf"),
    eastSea: require("./assets/font/EastSea.ttf"),
  });

  const images = {
    homeScreen: {
      wood: require("./assets/image/wood.jpg"),
      menuBackground: require("./assets/image/menu.jpg"),
    },
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("font loaded finish");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // font load error
    return null;
  }

  SplashScreen.preventAutoHideAsync();

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <RootStack images={images} />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
