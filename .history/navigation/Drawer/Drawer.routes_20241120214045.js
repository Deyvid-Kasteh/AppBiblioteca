import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet } from "react-native";
import BottomTabRoutes from "../BottomTab/BottomTab.routes";
import SignInScreen from "../../screens/SignInScreen";
import SignOutScreen from "../../screens/SignOutScreen";
import LoginScreen from "../../screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import CustomDrawer from "../../components/components/CustomDrawer";
import COLORS from "../../components/Colors/Colors";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerActiveBackgroundColor:
          styles.drawerActiveBackgroundColor.backgroundColor,
        drawerActiveTintColor: styles.drawerActiveTintColor.color,
        drawerStyle: styles.drawerStyle,
        drawerLabelStyle: styles.drawerLabelStyle,
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
          title: "SignIn",
          drawerIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Octicons name="sign-in" size={size} color={color} />;
            }
            return <Octicons name="sign-in" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
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

// Criação do StyleSheet para separar os estilos
const styles = StyleSheet.create({
  drawerActiveBackgroundColor: {
    backgroundColor: COLORS.caramel,
  },
  drawerActiveTintColor: {
    color: COLORS.,
    color: "#F2E2C4",
  },
  drawerStyle: {
    backgroundColor: "#F2E2C4",
  },
  drawerLabelStyle: {
    marginLeft: -20,
  },
});
