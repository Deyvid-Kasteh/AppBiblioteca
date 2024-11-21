import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet } from "react-native";
import Search from "../../screens/Search";
import Favorites from "../../screens/Favorites";
import ShoppingCart from "../../screens/ShoppingCart";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../../assets/Avatar/Avatar";
import { useNavigation } from "@react-navigation/native";
import HomeStackRoutes from "../NativeStack/HomeStack.routes";
import COLORS from "../../components/Colors/Colors";

const Tab = createBottomTabNavigator();

export default function BottomTabRoutes() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: COLORS.cream,
        headerStyle: styles.headerStyle,
        headerTitleAlign: "center",
        headerRight: () => (
          <Pressable
            style={styles.headerRight}
            onPress={() => navigation.openDrawer()}
          >
            <Avatar width={40} height={40} />
          </Pressable>
        ),
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.charcoal,
        tabBarInactiveTintColor: COLORS.cream,
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
        options={{
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

// Criação do StyleSheet para separar os estilos
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.caramel,
  },
  headerRight: {
    marginRight: 15,
  },
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 0,
    height: 50,
    borderTopWidth: 0,
    backgroundColor: COLORS.caramel,
  },
});




















// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Pressable } from "react-native";
// import Search from "../../screens/Search";
// import Favorites from "../../screens/Favorites";
// import ShoppingCart from "../../screens/ShoppingCart";

// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import Avatar from "../../assets/Avatar/Avatar";
// import { useNavigation } from "@react-navigation/native";
// import HomeStackRoutes from "../NativeStack/HomeStack.routes";
// import Home from "../../screens/Home";
// import TopTabRoutes from "../TopTabs/TopTabs.routes";
// import COLORS from "../../components/Colors/Colors";

// const Tab = createBottomTabNavigator();

// export default function BottomTabRoutes() {
//   const navigation = useNavigation();

//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerTintColor: COLORS.cream,
//         headerStyle: {
//           backgroundColor: COLORS.caramel,
//         },
//         headerTitleAlign: "center",
//         headerRight: () => (
//           <Pressable
//             style={{ marginRight: 15 }}
//             onPress={() => navigation.openDrawer()}
//           >
//             <Avatar width={40} height={40} />
//           </Pressable>
//         ),
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           borderTopRightRadius: 20,
//           borderTopLeftRadius: 20,
//           elevation: 0,
//           height: 50,
//           borderTopWidth: 0,
//           backgroundColor: COLORS.caramel,
//         },
//         tabBarActiveTintColor: COLORS.charcoal,
//         tabBarInactiveTintColor: COLORS.cream,
//       }}
//     >
//       <Tab.Screen
//         name="HomeStackRoutes"
//         component={HomeStackRoutes}
//         options={{
//           title: "Biblioteca.",
//           tabBarIcon: ({ color, size, focused }) => {
//             if (focused) {
//               return <Ionicons name="home" size={size} color={color} />;
//             }
//             return <Ionicons name="home-outline" size={size} color={color} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={Search}
//         options={{
//           title: "Buscar Livro",
//           tabBarIcon: ({ color, size, focused }) => {
//             if (focused) {
//               return <Ionicons name="md-search" size={size} color={color} />;
//             }
//             return (
//               <Ionicons name="md-search-outline" size={size} color={color} />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Favorites"
//         component={Favorites}
//         // component={TopTabRoutes}
//         options={{
//           // headerShown: false,
//           tabBarIcon: ({ color, size, focused }) => {
//             if (focused) {
//               return <AntDesign name="heart" size={size} color={color} />;
//             }
//             return <AntDesign name="hearto" size={size} color={color} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="ShoppingCart"
//         component={ShoppingCart}
//         options={{
//           // headerShown: false,
//           tabBarIcon: ({ color, size, focused }) => {
//             if (focused) {
//               return <Ionicons name="cart-sharp" size={size} color={color} />;
//             }
//             return <Ionicons name="cart-outline" size={size} color={color} />;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }