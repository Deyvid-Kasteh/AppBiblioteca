import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Favorites from "../../screens/Favorites";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabRoutes() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Best-Sellers" component={Favorites} />
      <TopTab.Screen name="Fantasia" component={Favorites} />
      <TopTab.Screen name="Ficção" component={Favorites} />
      <TopTab.Screen name="Romance" component={Favorites} />
    </TopTab.Navigator>
  );
}
