import React, { useContext } from "react";
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
import { useNavigation } from "@react-navigation/native";


export default function SignOutScreen() {
  const { nome, signOutProcess, usuarioEstaLogado, usuario } =
    useContext(AuthContext);
    const navigation = useNavigation();
  return (
    <>
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
              Logout
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
              marginBottom: 70,
            }}
            onPress={() => signOutProcess()}
          >
            <Text
              style={{
                color: "#F2E2C4",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>

    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "#D9B391",
    //   }}
    // >
    //   <Text>SignOutScreen</Text>
    //   <Button title="SAIR" onPress={() => signOutProcess()} />
    //   <Text>Nome: {nome}</Text>
    //   <Text>Logado: {usuarioEstaLogado.toString()}</Text>
    //   {usuarioEstaLogado ? (
    //     <Text>USUARIO: {JSON.stringify(usuario.name)}</Text>
    //   ) : null}
    //   <TouchableOpacity onPress={() => navigation.goBack()}>
    //     <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
    //   </TouchableOpacity>
    // </View>
  );
}
