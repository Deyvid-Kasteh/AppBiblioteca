import { View, Text } from "react-native";
import React from "react";



import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";




import SignInGoogle from "./GoogleSignIn/SignInGoogle";
import UserAsync from "./AsyncStorage/UserAsync";




































async function SignInProcess() {
GoogleSignin.configure();
  try {
      const signInResult = SignInGoogle();
      UserAsync.storeData(signInResult);
      console.log("Deu certo STOREDATA");
  } catch (error) {
    console.error(error);
  }
}
