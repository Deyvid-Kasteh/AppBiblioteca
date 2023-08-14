import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";

export default function SignOutScreen() {
  const { nome, signOutProcess, usuarioEstaLogado, usuario } =
    useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>SignOutScreen</Text>
      <Button title="SAIR" onPress={() => signOutProcess()} />
      <Text>Nome: {nome}</Text>
      <Text>Logado: {usuarioEstaLogado.toString()}</Text>

      <Text>Logado: {usuarioEstaLogado.toString()}</Text>
      {usuario? <Text></Text> : null}
    </View>
  );
}
