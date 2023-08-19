import { View, Text } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Avatar from "../../assets/Avatar/Avatar";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View {params: {width: '100%', height: '100%}}
        style={{
          alignSelf: "center",
          marginBottom: 30,
        }}
      >
        <Avatar />
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
