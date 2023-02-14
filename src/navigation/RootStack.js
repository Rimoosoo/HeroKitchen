import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../ui/HomeScreen";
import MenuList from "../ui/component/MenuList";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "매장 선택하기" }}
      />
      <Stack.Screen
        name="MenuList"
        component={MenuList}
        options={{ title: "메뉴판" }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
