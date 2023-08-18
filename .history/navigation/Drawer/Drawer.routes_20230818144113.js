import { createDrawerNavigator } from "@react-navigation/drawer"
import React from "react";
import BottomTabRoutes from "../BottomTab/BottomTab.routes";
import SignInScreen from "../../screens/SignInScreen";
import SignOutScreen from "../../screens/SignOutScreen";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";


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
        drawerLabelStyle: ""
      }}
    >
      <Drawer.Screen
        name="HomeStart"
        component={BottomTabRoutes}
        options={{
          title: "Início",
          drawerIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Sign-in"
        component={SignInScreen}
        options={{
          title: "Login",
          drawerIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Octicons name="sign-in" size={size} color={color} />;
            }
            return <Octicons name="sign-in" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Sign-out"
        component={SignOutScreen}
        options={{
          title: "Logout",
          drawerIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Octicons name="sign-out" size={size} color={color} />;
            }
            return <Octicons name="sign-out" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}