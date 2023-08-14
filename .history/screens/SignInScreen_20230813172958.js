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
import SignInProcess from "../components/SignInProcess";

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
          // disabled={this.state.isSigninInProgress}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Image
          style={{
            width: 200,
            height: 200,
            marginTop: 10,
            borderRadius: 100,
            marginBottom: 10,
          }}
          source={{
            uri: "https://lh3.googleusercontent.com/a/AAcHTte48VWjgmSXqEMOoU10nbSWBXzoungFvNviuLA3HROSnesQ",
          }}
        /> */}
          {/* <Image
            style={{
              width: 200,
              height: 200,
              marginTop: 50,
              borderRadius: 100,
              marginBottom: 20,
            }}
            source={{
              uri: `${photo}`,
            }}
          /> */}
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{userString}</Text>
        </View>
        <Button title="SAIR" onPress={() => signOut()} />
      </View>
    </>
  );
}
