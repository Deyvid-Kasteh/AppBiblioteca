import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Favorites from "../../screens/Favorites";
import Romance from "../../screens/Romance";
import Ficcao from "../../screens/Ficcao";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabRoutes() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
        // tabBarItemStyle: { width: 200 },
        tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <TopTab.Screen name="Best-Sellers" component={Favorites} />
      <TopTab.Screen name="Fantasia" component={Favorites} />
      <TopTab.Screen name="Ficção" component={Ficcao} />
      <TopTab.Screen name="Romance" component={Romance} />
    </TopTab.Navigator>
  );
}
