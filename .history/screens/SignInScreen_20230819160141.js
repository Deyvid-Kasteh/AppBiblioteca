import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  // GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen({ navigation }) {
  const { nome, SignInProcess, usuarioEstaLogado, usuario } =
    useContext(AuthContext);

  const [text, setText] = useState("");

  return (
    <>
      <SafeAreaView />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9B391",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#A65A49",
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: 40,
              }}
            >
              Login
            </Text>
            <TextInput
              style={{
                height: 40,
                width: "80%",
                marginBottom: 20,
                borderRadius: 16,
              }}
              placeholder="Email"
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              backgroundColor="#F2E2C4"
            />
            <TextInput
              style={{
                height: 40,
                width: "80%",
                marginBottom: 40,
                borderRadius: 16,
              }}
              placeholder="Password"
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              secureTextEntry={true}
              backgroundColor="#F2E2C4"
            />
            <></>
            <Text
              style={{
                color: "#A65A49",
                alignSelf: "flex-end",
                marginBottom: 40,
              }}
            >
              Esqueceu a senha?
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 250,
              backgroundColor: "#A65A49",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                color: "#F2E2C4",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#A65A49",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => SignInProcess()}
          >
            <Ionicons name="logo-google" size={35} color="#F2E2C4" />
          </TouchableOpacity>
        </View>

        {/* <Text>Nome: {nome}</Text> */}
        {/* <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => SignInProcess()}
        /> */}
        {/* <Text>Logado: {usuarioEstaLogado.toString()}</Text> */}

        {/* {usuarioEstaLogado ? (
          <Text>USUARIO: {JSON.stringify(usuario)}</Text>
        ) : null} */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={50}
            color="#F2E2C4"
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
