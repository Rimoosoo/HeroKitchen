import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../ui/HomeScreen";
import MenuList from "../ui/component/MenuList";
import StoreIntroduce from "../ui/component/store/StoreIntroduce";
import DeliveryScreen from "../ui/DeliveryScreen";
import PickupScreen from "../ui/PickupScreen";

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
      <Stack.Screen
        name="StoreIntroduce"
        component={StoreIntroduce}
        options={{ title: "스토어" }}
      />
      <Stack.Screen
        name="DeliveryScreen"
        component={DeliveryScreen}
        options={{ title: "히어로딜리버리" }}
      />
      <Stack.Screen
        name="PickupScreen"
        component={PickupScreen}
        options={{ title: "히어로픽업" }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
