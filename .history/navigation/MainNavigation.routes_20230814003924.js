import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./Drawer/Drawer.routes";
import 

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
