import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

function TopTab() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Settings" component={SettingsScreen} />
    </TopTab.Navigator>
  );
}
