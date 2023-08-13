import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
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
import React, { useEffect, useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

// WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  let userTotal = userInfo;

  // ============================================== AsyncStorage ==========================
  const storeData = async (value) => {
    try {
      console.log("Começou AsyncStorage");
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
      console.log("Deu certo AsyncStorage");
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");
      console.log("começou get data");
      console.log(jsonValue);
      console.log("terminou get data");
      if (jsonValue != null) {} else 


        return jsonValue != null ? jsonValue : null;
    } catch (e) {
      // error reading value
    }
  };
  // ============================================== AsyncStorage ==========================

  GoogleSignin.configure();

  signIn = async () => {
    try {
      console.log("COMEÇOU");
      await GoogleSignin.hasPlayServices();
      const userInfoGoogleSignin = await GoogleSignin.signIn();
      storeData(userInfoGoogleSignin.user);
      setUserInfo(userInfoGoogleSignin);
      console.log("Deu Certo");
      // console.log(JSON.stringify(userInfoGoogleSignin));
      console.log("Buscar DADOR NO STORAGE");
      const getDataAsync = getData();
      console.log(getDataAsync);
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

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null); // Remember to remove the user from your app's state as well
      console.log("SAIU");
    } catch (error) {
      console.error(error);
    }
  };

  // return <LoadingAppScreen />;
  // return <MainNavigation />;
  return (
    <SignInScreen signIn={signIn} signOut={signOut} userTotal={userTotal} />
  );

  // return userInfo ? <MainNavigation /> : <SignInScreen signIn={signIn} />;
}
