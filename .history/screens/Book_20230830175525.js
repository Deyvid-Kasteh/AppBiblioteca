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
          <View
            style={{
              flex: 0.95,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              paddingBottom: 20,
              backgroundColor: "#F2E2C4",
            }}
          >
            <Text>{livro?.id}</Text>
            {/* <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 240,
                height: 384,
                borderRadius: 10,
              }}
              source={{
                uri: `${route.params.image}`,
              }}
            />
            <Text
              numberOfLines={2}
              style={{
                fontSize: 30,
              }}
            >
              {route.params.name}
            </Text>
            <Text numberOfLines={8}>{route.params.description}</Text>
          </View>
        </ScrollView> */}
            <Button title="Voltar" onPress={() => goBack()} />
            {/* <View></View> */}
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              flex: 0.95,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              paddingBottom: 20,
              backgroundColor: "#F2E2C4",
            }}
          >
            <Button title="Voltar" onPress={() => goBack()} />
            {/* <View></View> */}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
