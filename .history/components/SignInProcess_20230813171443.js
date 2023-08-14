import { View, Text } from "react-native";
import React from "react";
import SignInGoogle from "./GoogleSignIn/SignInGoogle";
import UserAsync from "./AsyncStorage/UserAsync";

export default function SignInProcess() {
  try {
      const signInResult = SignInGoogle();
      UserAsync.s

  } catch (error) {
    console.error(error);
  }
}
