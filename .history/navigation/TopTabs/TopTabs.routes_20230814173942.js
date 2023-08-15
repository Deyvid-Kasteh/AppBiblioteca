import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <TopTab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </TopTab.Navigator>
  );
}
