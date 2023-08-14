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
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignInScreen() {
  GoogleSignin.configure();
  SignInProcess = async () => {





    
    try {
      const signInResult = await SignInGoogle();
      console.log(signInResult);
      console.log("Começou STOREDATA");
      const jsonValue = JSON.stringify(signInResult);
      console.log(jsonValue);
      await AsyncStorage.setItem("@user", jsonValue);
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
