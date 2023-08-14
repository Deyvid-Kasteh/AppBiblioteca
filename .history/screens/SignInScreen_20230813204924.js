import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

export default function SignInScreen() {
SignInProcess = async () => {
  GoogleSignin.configure();
  try {
    const signInResult = await SignInGoogle();
    console.log(signInResult);
    console.log("Começou STOREDATA");
    const jsonValue = JSON.stringify(signInResult);
    console.log(jsonValue);
  } catch (error) {}
};

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
