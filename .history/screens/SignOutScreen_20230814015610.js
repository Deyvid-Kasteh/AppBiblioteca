import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";


export default function SignOutScreen() {
    const { nome, signOutProcess, usuarioEstaLogado } = useContext(AuthContext);
  return (
    <View>
      <Text>SignOutScreen</Text>
    </View>
  )
}