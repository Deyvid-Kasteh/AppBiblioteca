import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  // GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../components/contexts/Authentication";

export default function SignInScreen() {
  const { nome, SignInProcess, usuarioEstaLogado, usuario } =
    useContext(AuthContext);

  return (
    <>
      <SafeAreaView />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Nome: {nome}</Text>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => SignInProcess()}
        />
        <Text>Logado: {usuarioEstaLogado.toString()}</Text>

        {usuarioEstaLogado ? (
          <Text>USUARIO: {JSON.stringify(usuario)}</Text>
        ) : null}
        Touc
        <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
      </View>
    </>
  );
}
