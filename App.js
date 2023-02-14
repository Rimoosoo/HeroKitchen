import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
