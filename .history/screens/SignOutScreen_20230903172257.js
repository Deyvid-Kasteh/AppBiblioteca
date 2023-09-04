import React, { useContext } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";


export default function SignOutScreen() {
  const { nome, signOutProcess, usuarioEstaLogado, usuario } =
    useContext(AuthContext);


  
    const navigation = useNavigation();
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
      {usuarioEstaLogado ? (
        <Text>USUARIO: {JSON.stringify(usuario.name)}</Text>
      ) : null}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
}
