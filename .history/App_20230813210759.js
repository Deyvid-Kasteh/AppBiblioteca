import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";


import MainNavigation from "./navigation/MainNavigation.routes";
import SignInScreen from "./screens/SignInScreen";
import LoadingAppScreen from "./screens/LoadingAppScreen";

import React, { useEffect, useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";


export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  let userTotal = userInfo;



  useEffect(() => {
    getMyObject = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@key");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // read error
      }

      console.log("Done.");
    };
    

  }, []);





































  // return <LoadingAppScreen />;
  // return <MainNavigation />;
  return (
    <SignInScreen  />
  );

  // return userInfo ? <MainNavigation /> : <SignInScreen signIn={signIn} />;
}
