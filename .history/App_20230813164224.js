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

  // return <LoadingAppScreen />;
  // return <MainNavigation />;
  return (
    <SignInScreen signIn={signIn} signOut={signOut} userTotal={userTotal} />
  );

  // return userInfo ? <MainNavigation /> : <SignInScreen signIn={signIn} />;
}
