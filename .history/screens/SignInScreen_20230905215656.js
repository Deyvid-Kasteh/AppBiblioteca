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
import { AuthContext } from "../components/contexts/Authentication";
import KeyboardDismiss from "../components/components/KeyboardDismiss";

export default function SignInScreen({ navigation }) {
  const { SignInGoogleProcess, SignIn } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  handleSignIn = async () => {
    try {
      if (name === "" || email === "" || password === "" || rePassword === "") {
        return;
      }
      if (password.length <= 7) {
        return;
      }
      if (password !== rePassword) {
        return;
      }
      console.log("Login");
      SignIn(name, email, password);
      console.log("passou pelo login");
    } catch (error) {
      console.log("veio pro error");
      console.error(error);
    }
  };

  return (
    <KeyboardDismiss>
      // {/* <SafeAreaView /> */}
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
              Inscrição
            </Text>
            <TextInput
              style={{
                height: 40,
                width: "80%",
                marginBottom: 20,
                borderRadius: 16,
                paddingLeft: 20,
              }}
              placeholder="Nome"
              onChangeText={(newName) => setName(newName)}
              defaultValue={name}
              backgroundColor="#F2E2C4"
            />
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
                marginBottom: 20,
                borderRadius: 16,
                paddingLeft: 20,
              }}
              placeholder="Senha"
              onChangeText={(newPassword) => setPassword(newPassword)}
              defaultValue={password}
              secureTextEntry={true}
              backgroundColor="#F2E2C4"
            />
            <TextInput
              style={{
                height: 40,
                width: "80%",
                marginBottom: 20,
                borderRadius: 16,
                paddingLeft: 20,
              }}
              placeholder="Confirme a senha"
              onChangeText={(newPassword) => setRePassword(newPassword)}
              defaultValue={rePassword}
              secureTextEntry={true}
              backgroundColor="#F2E2C4"
            />
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 250,
              backgroundColor: "#A65A49",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
              marginTop: 40,
              marginBottom: 70,
            }}
            onPress={() => handleSignIn()}
          >
            <Text
              style={{
                color: "#F2E2C4",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Inscrever-se
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
            onPress={() => SignInGoogleProcess()}
          >
            <Ionicons name="logo-google" size={35} color="#F2E2C4" />
          </TouchableOpacity>
        </View>
      </View>
     </KeyboardDismiss>
  );
}
