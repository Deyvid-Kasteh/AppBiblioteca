import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AuthContext } from "../contexts/Authentication";
import COLORS from "../Colors/Colors";
import Avatar from "../../assets/Avatar/Avatar";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    backgroundColor: COLORS.caramel,
    marginBottom: 40,
    padding: 8,
    borderRadius: 100,
  },
  userName: {
    color: COLORS.caramel,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40,
  },
});

export default function CustomDrawer(props) {
  const { usuario } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar width={110} height={110} />
        </View>
        <Text style={styles.userName}>{usuario?.name || "Carregando..."}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
