import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { buscaLivroPorId } from "../services/api";
export default function Book({ navigation: { goBack }, route }) {


  const [livro, setLivro] = useState(null);
  BuscaLivro = async (idLivro) => {
    const response = await buscaLivroPorId(idLivro);
    console.log(response.data);
    setLivro(()=> (response.data));
  };


  useEffect(() => {
    console.log(route.params.idLivro);
    BuscaLivro(route.params.idLivro);

  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#F2E2C4",
      }}
    >
      {livro ? (
        <>
        </>
      ) : (null)}
      
    </View>
  );
}

const styles = StyleSheet.create({});
