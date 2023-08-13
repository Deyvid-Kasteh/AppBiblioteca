import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation.routes";
import SignInScreen from "./screens/SignInScreen";
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







WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "222273696743-cfo2t0ghcqh0b6nau71ql0scusl0m8cr.apps.googleusercontent.com",
    webClientId:
      "222273696743-3p3h1pfivs0ljqbvs7077h0samufab2f.apps.googleusercontent.com",
  });

  // React.useEffect(() => {
  //   console.log("Entrou");
  //   console.log(response)
  //   if (response?.type == "success") {
  //     const { id_token } = response.params;
  //     console.log(JSON.stringify(id_token));
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     try {
  //       signInWithCredential(FIREBASE_AUTH, credential);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }, [response]);

  // React.useEffect(() => {
  //   const unsub = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
  //     if (user) {
  //       console.log(JSON.stringify(user, null, 2));
  //       setUserInfo(user);
  //     } else {
  //       console.log("else");
  //     }
  //   });
  //   return () => unsub();
  // }, []);

  // return <MainNavigation />;
  return userInfo ? (
    <MainNavigation />
  ) : (
    <SignInScreen promptAsync={promptAsync} />
  );
}
