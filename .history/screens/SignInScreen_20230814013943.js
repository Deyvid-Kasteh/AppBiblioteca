import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import {
  // GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../components/contexts/Authentication";

export default function SignInScreen() {
  const { nome, SignInProcess, usuarioEstaLogado } = useContext(AuthContext);

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

        <Button title="SAIR" onPress={() => signOut()} />
      </View>
    </>
  );
}
