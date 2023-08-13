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
  
    webClientId: "<FROM DEVELOPER CONSOLE>", // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: "", // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: "", // [Android] specifies an account name on the device that should be used
    iosClientId: "<FROM DEVELOPER CONSOLE>", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId:
  //     "222273696743-cfo2t0ghcqh0b6nau71ql0scusl0m8cr.apps.googleusercontent.com",
  //   webClientId:
  //     "222273696743-3p3h1pfivs0ljqbvs7077h0samufab2f.apps.googleusercontent.com",
  // });

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
    <SignInScreen />
  );
}
