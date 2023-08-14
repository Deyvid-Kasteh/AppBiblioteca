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
  // GoogleSignin.configure();
  // SignInProcess = async () => {
  //   try {
  //     console.log("Começou SIGN-IN");
  //     await GoogleSignin.hasPlayServices();
  //     const signInResult = await GoogleSignin.signIn();
  //     console.log(signInResult);
  //     console.log("Começou STOREDATA");
  //     const jsonValue = JSON.stringify(signInResult.user);
  //     console.log(jsonValue);
  //     await AsyncStorage.setItem("@user", jsonValue);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.error("user cancelled the login flow");
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.error("operation (e.g. sign in) is in progress already");
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.error("play services not available or outdated");
  //     } else {
  //       console.error("some other error happened");
  //       console.error(error);
  //     }
  //   }
  // };

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
        <Text>No</Text>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => SignInProcess()}
        />
        <Button title="SAIR" onPress={() => signOut()} />
      </View>
    </>
  );
}
