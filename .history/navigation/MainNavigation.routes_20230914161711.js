import "react-native-gesture-handler";
import {
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./Drawer/Drawer.routes";
import AuthProvider from "../components/contexts/Authentication";

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <DrawerRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
