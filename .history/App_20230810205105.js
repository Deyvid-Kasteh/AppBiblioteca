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
  GoogleSignin.configure({
    webClientId:
      "222273696743-3p3h1pfivs0ljqbvs7077h0samufab2f.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });

  signIn = async () => {
    try {
      console.log("try");
      await GoogleSignin.hasPlayServices();
      console.log("hasPlayServices");
      const userInfoGoogleSignin = await GoogleSignin.signIn();
      console.log("signIn");
      setUserInfo({ userInfoGoogleSignin });
      console.log(JSON.stringify(userInfoGoogleSignin));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              console.log("user cancelled the login flow");

        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
                      console.log("user cancelled the login flow");

      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
                      console.log("user cancelled the login flow");

      } else {
        // some other error happened
                      console.log("user cancelled the login flow");

      }
    }
  };

  // return <MainNavigation />;
  return userInfo ? <MainNavigation /> : <SignInScreen signIn={signIn} />;
}
