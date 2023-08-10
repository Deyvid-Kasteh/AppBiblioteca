import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation.routes";
import SignInScreen from "./screens/SignInScreen";
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from "firebase/auth";
import { auth } from './firebaseConfig'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "426033460224-jj43m9je8i0hia6a156c3qhliaa74ni7.apps.googleusercontent.com"
  })

  useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
    }

  }, [response]);



    // return <MainNavigation />;
  return <SignInScreen promptAsync={}/>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
