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
// import { TextInput } from "react-native";

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
        <View>
          <View>
            <Text
              style={{
                color: "#A65A49",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
            <TextInput
              style={{
                height: 40,
                marginBottom: 40,
              }}
              placeholder="Email"
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              backgroundColor="#F2E2C4"
            />
          </View>
          <View>
            <TextInput
              style={{ height: 40 }}
              placeholder="Password"
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              secureTextEntry={true}
              backgroundColor="#F2E2C4"
            />
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 250,
              backgroundColor: "#BF7F5A",
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
        </View>

        {/* <Text>Nome: {nome}</Text> */}
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => SignInProcess()}
        />
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
