import { View, Text } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AuthContext } from "../contexts/Authentication";

import Avatar from "../../assets/Avatar/Avatar";

export default function CustomDrawer(props) {
  const { usuario } =
    useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignSelf: "center",
          marginBottom: 30,
        }}
      >
        <Avatar width={110} height={110} />
        <Text>{usuario?.name}</Text>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
