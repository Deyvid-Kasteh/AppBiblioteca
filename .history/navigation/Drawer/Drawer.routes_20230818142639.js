import { createDrawerNavigator } from "@react-navigation/drawer"
import React from "react";
import BottomTabRoutes from "../BottomTab/BottomTab.routes";
import SignInScreen from "../../screens/SignInScreen";
import SignOutScreen from "../../screens/SignOutScreen";
import { useNavigation } from "@react-navigation/native";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerActiveBackgroundColor: "#BF7F5A",
        drawerActiveTintColor: "#F2E2C4",
        drawerStyle: {
          backgroundColor: "#F2E2C4",
        },
      }}
    >
      <Drawer.Screen name="HomeStart" component={BottomTabRoutes} options={}/>
      <Drawer.Screen name="Sign-in" component={SignInScreen} />
      <Drawer.Screen name="Sign-out" component={SignOutScreen} />
    </Drawer.Navigator>
  );
}