import "react-native-gesture-handler";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./Drawer/Drawer.routes";
import AuthProvider from "../components/contexts/Authentication";

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DrawerRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
