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
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import parse from "html-react-parser";


export default function Book({ navigation: { goBack }, route }) {
  const [livro, setLivro] = useState(null);
  const book = route.params.idLivro;

  const heart = () => {
    let hearth = true;
    if (hearth) {
      return <AntDesign name="heart" size={30} color="#A65A49" />;
    } else {
      return <AntDesign name="hearto" size={30} color="#A65A49" />;
    }
  };
  const ShoppingCa = () => {
    let cart = true;
    if (cart) {
      return <Ionicons name="cart-sharp" size={30} color="#A65A49" />;
    } else {
      return <Ionicons name="cart-outline" size={30} color="#A65A49" />;
    }
  };
  const getData = async (idLivro) => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");
      const data = JSON.parse(jsonValue);
      console.log(
        "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
      );
      console.log(data.books);
      const books = data.books;

      const tem = books.find(boo => boo.idLivro == book);
      if (tem) {
        console.log(tem)
      } else {co

      // function bookFilter(book) {
      //   books.find(books => {
      //     console.log(
      //       "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
      //     );
      //     console.log(books.idLivro == book);
      //     console.log(
      //       "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
      //     );
      //   });
      // }
      // bookFilter(book);

      // return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };



  BuscaLivro = async (idLivro) => {
    const response = await buscaLivroPorId(idLivro);
    console.log(response.data);
    setLivro(() => response.data);
    getData();
  };

  useEffect(() => {
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
            <ScrollView>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 240,
                      height: 384,
                      borderRadius: 10,
                      // alignSelf: "center",
                    }}
                    source={{
                      uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
                    }}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 80,
                      marginTop: 50,
                    }}
                  >
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#D9B391",
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {heart()}
                    </View>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#D9B391",
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {ShoppingCa()}
                    </View>
                  </View>
                </View>

                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 30,
                  }}
                >
                  {livro.volumeInfo.title}
                </Text>
                <Text numberOfLines={8}>
                  {livro.volumeInfo.description}
                </Text>

              </View>
            </ScrollView>
            <Button title="Voltar" onPress={() => goBack()} />
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
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
