import { View, Text } from "react-native";
import React from "react";
import SignInGoogle from "./GoogleSignIn/SignInGoogle";

export default function SignInProcess() {
  try {
    const signInResult = SignInGoogle();
  } catch (error) {
    console.error(error);
  }
}
