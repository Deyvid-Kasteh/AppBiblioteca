import { View, Text } from 'react-native'
import React from 'react'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export default function SignOutGoogle() {
    signOut = async () => {
      try {
        await GoogleSignin.signOut();
        setUserInfo(null); // Remember to remove the user from your app's state as well
        console.log("SAIU");
        console.log("SAIU");
        await AsyncStorage.removeItem("@user");
        console.log("SAIU");
        console.log("SAIU");
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View>
      <Text>SignOutGoogle</Text>
    </View>
  )
}