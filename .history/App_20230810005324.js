import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation.routes";
import SignInScreen from "./screens/SignInScreen";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "426033460224-jj43m9je8i0hia6a156c3qhliaa74ni7.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      try {
        signInWithCredential(FIREBASE_AUTH, credential);
      } catch (error) {
        console.log(error);
      }
    }
  }, [response]);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        console.log("else");
      }
    });
    return () => unsub();
  }, []);

  // return <MainNavigation />;
  return userInfo ? (
    <MainNavigation />
  ) : (
    <SignInScreen promptAsync={promptAsync} />
  );
}
