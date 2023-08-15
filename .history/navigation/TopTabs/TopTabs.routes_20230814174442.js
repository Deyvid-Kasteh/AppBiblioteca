import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Favorites from "../../screens/Favorites";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabRoutes() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={Favorites} />
      <TopTab.Screen name="Settings" component={Favorites} />{" "}
      <TopTab.Screen name="Settings" component={Favorites} />{" "}
      <TopTab.Screen name="Settings" component={Favorites} />
    </TopTab.Navigator>
  );
}
