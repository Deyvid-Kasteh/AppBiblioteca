import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";

const ShoppingCart = () => {
  const { nome, signOutProcess, usuarioEstaLogado } = useContext(AuthContext);

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
      <Text>Logado: {usuarioEstaLogado.toString()}</Text>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({});