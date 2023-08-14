import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

export default function SignInScreen() {

  // let photo = userTotal?.user?.photo;
  // let name = userTotal?.user?.name;
  // let email = userTotal?.user?.email;
  // let id = userTotal?.user?.id;
  // let userString = userTotal ? JSON.stringify(userTotal) : "NÃO TEM";



  return (
    <>
      <SafeAreaView />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => SignInProcess()}
        />
        <Button title="SAIR" onPress={() => signOut()} />
      </View>
    </>
  );
}
