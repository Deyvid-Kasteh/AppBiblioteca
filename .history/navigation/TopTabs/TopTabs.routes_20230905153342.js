import { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Favorites from "../../screens/Favorites";
import Romance from "../../screens/Romance";
import Ficcao from "../../screens/Ficcao";
import Fantasia from "../../screens/Fantasia";
import BestSellers from "../../screens/BestSellers";
import { useNavigation } from "@react-navigation/native";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabRoutes() {
  const navigation = useNavigation();

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          // color: "#A65A49",
          color: "#2B3640",
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarStyle: {
          backgroundColor: "#D9B391",
          // height: 50,
          width: "100%",
          alignSelf: "center",
          // alignItems: "center",
          // borderRadius: 10,
          // borderBottomLeftRadius: 20,
          // borderBottomRightRadius: 30,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#A65A49",
          height: 3,
          // width: 50,
          alignSelf: "center",
          borderRadius: 10,
        },
      }}
    >
      <TopTab.Screen name="Best-Sellers" component={BestSellers} />
      <TopTab.Screen name="Fantasia" component={Fantasia} />
      <TopTab.Screen name="Ficção" component={Ficcao} />
      <TopTab.Screen name="Romance" component={Romance} />
    </TopTab.Navigator>
  );
}
