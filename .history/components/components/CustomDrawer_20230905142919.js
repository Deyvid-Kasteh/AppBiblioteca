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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#BF7F5A",
            marginBottom: 40,
            // margin: 10,
            padding: 10,
            bor
          }}
        >
          <Avatar width={110} height={110} />
        </View>
        <Text
          style={{
            color: "#A65A49",
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          {usuario?.name}
        </Text>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
