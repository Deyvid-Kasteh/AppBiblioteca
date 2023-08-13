import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation.routes";
import SignInScreen from "./screens/SignInScreen";
import LoadingAppScreen from "./screens/LoadingAppScreen";
// import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithCredential,
// } from "firebase/auth";
// import { FIREBASE_AUTH } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

// WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  // GoogleSignin.configure();

  // signIn = async () => {
  //   try {
  //     console.log("try");
  //     await GoogleSignin.hasPlayServices();
  //     console.log("hasPlayServices");
  //     const userInfoGoogleSignin = await GoogleSignin.signIn();
  //     console.log("signIn");
  //     setUserInfo({ userInfoGoogleSignin });
  //     console.log(JSON.stringify(userInfoGoogleSignin));
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.error("user cancelled the login flow");
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //       console.error("operation (e.g. sign in) is in progress already");
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //       console.error("play services not available or outdated");
  //     } else {
  //       // some other error happened
  //       console.error("some other error happened");
  //       console.error(error)
  //     }
  //   }
  // };

  return <SignInScreen />;
  // return userInfo ? <MainNavigation /> : <SignInScreen signIn={signIn} />;
}
