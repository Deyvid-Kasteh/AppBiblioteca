import React, { useContext } from "react";
import { Button, StyleSheet, Text, View, ToastAndroid } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";
import Toast from "react-native-toast-message";

const ShoppingCart = () => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);
  const navigation = useNavigation();
  const LivrosShoppingCart = usuario?.shoppingCart;

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      // text2: "This is some something 👋",
    });
    console.log("foi");
  };

  const showToastAndroid = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Hello",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D9B391",
      }}
    >
      <Text>ShoppingCart</Text>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({});
