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
  // const storeData = async (value) => {
  //   try {
  //     console.log("Começou AsyncStorage");
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem("@user", jsonValue);
  //     console.log("Deu certo AsyncStorage");
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("@user");
  //     console.log("começou get data");
  //     console.log(jsonValue);
  //     console.log("terminou get data");
  //     if (jsonValue != null) {
  //       return jsonValue;
  //     } else {
  //       return null;
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };
  // ============================================== AsyncStorage ==========================


  // return <LoadingAppScreen />;
  // return <MainNavigation />;
  return (
    <SignInScreen signIn={signIn} signOut={signOut} userTotal={userTotal} />
  );

  // return userInfo ? <MainNavigation /> : <SignInScreen signIn={signIn} />;
}
