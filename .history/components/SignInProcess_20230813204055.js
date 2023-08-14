import { View, Text } from "react-native";
import React from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";



GoogleSignin.configure();
signIn = async () => {
  try {
    console.log("Começou SIGN-IN");
    await GoogleSignin.hasPlayServices();
    const userInfoGoogleSignin = await GoogleSignin.signIn();
    console.log("Deu Certo SIGN-IN");
    return userInfoGoogleSignin.user;
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

const UserAsync = {
  storeData: async (value) => {
    try {
      console.log("Começou STOREDATA");
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
      console.log("Deu certo STOREDATA");
    } catch (e) {
      // saving error
    }
  },

  getData: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");
      console.log("começou GETDATA");
      console.log(jsonValue);
      console.log("terminou GETDATA");
      if (jsonValue != null) {
        return jsonValue;
      } else {
        return null;
      }
    } catch (e) {
      // error reading value
    }
  },
};





// async function SignInProdsfcess() {



//   try {
//       const signInResult = SignInGoogle();
//       const jsonValue = await JSON.stringify(value);





//       UserAsync.storeData(signInResult);
//       console.log("Deu certo STOREDATA");
//   } catch (error) {
//     console.error(error);
//   }
// }

export const SignInProcess = async () => {
    GoogleSignin.configure();
try {
    const signInResult = await SignInGoogle();
    console.log("Começou STOREDATA");
    console.log("Começou STOREDATA");
    const jsonValue = JSON.stringify(signInResult);


} catch (error) {

}}
