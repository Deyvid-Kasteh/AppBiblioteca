import { View, Text } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AuthContext } from "../contexts/Authentication";
import Cor
import Avatar from "../../assets/Avatar/Avatar";

export default function CustomDrawer(props) {
  const { usuario } = useContext(AuthContext);
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
            backgroundColor: ,
            marginBottom: 40,
            // margin: 10,
            padding: 8,
            borderRadius: 100,
          }}
        >
          <Avatar width={110} height={110} />
        </View>
        <Text
          style={{
            color: COLORS.caramel,
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
