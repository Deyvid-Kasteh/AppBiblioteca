import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Book from "../../screens/Book";
import TopTabRoutes from "../TopTabs/TopTabs.routes";

const HomeStack = createNativeStackNavigator();

export default function HomeStackRoutes() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={TopTabRoutes} />
      <HomeStack.Screen name="Book" component={Book} />
    </HomeStack.Navigator>
  );
}
