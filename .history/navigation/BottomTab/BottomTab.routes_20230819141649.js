import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";
import Search from "../../screens/Search";
import Favorites from "../../screens/Favorites";
import ShoppingCart from "../../screens/ShoppingCart";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../../assets/Avatar/Avatar";
import { useNavigation } from "@react-navigation/native";
import HomeStackRoutes from "../NativeStack/HomeStack.routes";
import Home from "../../screens/Home";
import TopTabRoutes from "../TopTabs/TopTabs.routes";

const Tab = createBottomTabNavigator();

export default function BottomTabRoutes() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "#F2E2C4",
        headerStyle: {
          backgroundColor: "#A65A49",
        },
        headerTitleAlign: "center",
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Avatar width={30} height={40} />
          </Pressable>
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          // borderRadius: 15,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          elevation: 0,
          height: 55,
          borderTopWidth: 0,
          backgroundColor: "#A65A49",
        },
        tabBarActiveTintColor: "#2B3640",
        tabBarInactiveTintColor: "#F2E2C4",
      }}
    >
      <Tab.Screen
        name="HomeStackRoutes"
        component={HomeStackRoutes}
        options={{
          title: "Biblioteca.",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Buscar Livro",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="md-search" size={size} color={color} />;
            }
            return (
              <Ionicons name="md-search-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        // component={TopTabRoutes}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <AntDesign name="heart" size={size} color={color} />;
            }
            return <AntDesign name="hearto" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="cart-sharp" size={size} color={color} />;
            }
            return <Ionicons name="cart-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
