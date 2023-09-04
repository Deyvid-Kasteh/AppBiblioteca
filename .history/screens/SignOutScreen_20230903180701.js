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
import Avatar from "../assets/Avatar/Avatar";


export default function SignOutScreen() {
  const { signOutProcess, usuarioEstaLogado, usuario } =
    useContext(AuthContext);
  const navigation = useNavigation();
  console.log(usuario);
  return (
    <>
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: "#D9B391",
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Avatar width={110} height={110} />

            <Text>
              O usuário está logado?: {usuarioEstaLogado ? "SIM" : "NÃO"}
            </Text>
            <Text>{usuario?.name}</Text>
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
