import React, {useContext} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../components/contexts/Authentication";




const ShoppingCart = () => {
  const { nome, signOutProcess, usuarioEstaLogado } = useContext(AuthContext);
  





















  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      // setUserInfo(null); // Remember to remove the user from your app's state as well
      console.log("SAIU");
      console.log("SAIU");
      await AsyncStorage.removeItem("@user");
      console.log("SAIU");
      console.log("SAIU");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ShoppingCart</Text>
      <Button title="SAIR" onPress={() => signOutProcess()} />
      <Text>Nome: {nome}</Text>
      <Text>Logado: {usuarioEstaLogado}</Text>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({});
