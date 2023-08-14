import { View, Text } from "react-native";
import React from "react";



import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";




import SignInGoogle from "./GoogleSignIn/SignInGoogle";
import UserAsync from "./AsyncStorage/UserAsync";



GoogleSignin.configure();
signIn = async () => {
  try {
    console.log("Começou SIGN-IN");
    await GoogleSignin.hasPlayServices();
    const userInfoGoogleSignin = await GoogleSignin.signIn();
    console.log("Deu Certo SIGN-IN");
    return userInfoGoogleSignin.user;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.error("user cancelled the login flow");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.error("operation (e.g. sign in) is in progress already");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.error("play services not available or outdated");
    } else {
      console.error("some other error happened");
      console.error(error);
    }
  }
};









































export default function SignInProcess() {



  try {
      const signInResult = SignInGoogle();
      UserAsync.storeData(signInResult);
      console.log("Deu certo STOREDATA");
  } catch (error) {
    console.error(error);
  }
}
