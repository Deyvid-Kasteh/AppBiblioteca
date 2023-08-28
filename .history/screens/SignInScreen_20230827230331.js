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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    if (password.length <= 7) {
      return;
    }

    console.log("Login");
    console.log("email:", email);
    console.log("password:", password);
    login(email, password);
    console.log("passou pelo login");
    navigate("/");
  };

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
                paddingLeft: 20,
              }}
              placeholder="Email"
              onChangeText={(newEmail) => setEmail(newEmail)}
              defaultValue={email}
              backgroundColor="#F2E2C4"
            />
            <TextInput
              style={{
                height: 40,
                width: "80%",
                marginBottom: 10,
                borderRadius: 16,
                paddingLeft: 20,
              }}
              placeholder="Password"
              onChangeText={(newPassword) => setPassword(newPassword)}
              defaultValue={password}
              secureTextEntry={true}
              backgroundColor="#F2E2C4"
            />
            <View
              style={{
                width: "80%",
              }}
            >
              <Text
                style={{
                  color: "#A65A49",
                  alignSelf: "flex-end",
                  marginBottom: 40,
                  marginRight: 10,
                }}
              >
                Esqueceu a senha?
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 250,
              backgroundColor: "#A65A49",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
              marginBottom: 70,
            }}

          >
            <Text
              style={{
                color: "#F2E2C4",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Entrar
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
            }}
          >
            <Text
              style={{
                color: "#F2E2C4",
                alignSelf: "center",
                marginBottom: 10,
                marginRight: 10,
                fontWeight: "bold",
              }}
            >
              Ou entre com:
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#A65A49",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginTop: 20,
            }}
            onPress={() => SignInProcess()}
          >
            <Ionicons name="logo-google" size={35} color="#F2E2C4" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
