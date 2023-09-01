import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { buscaLivroPorId } from "../services/api";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import parse from "html-react-parser";

export default function Book({ navigation: { goBack }, route }) {
  const [livro, setLivro] = useState(null);
  const [bookFav, setBookFav] = useState(false);
  const book = route.params.idLivro;

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

      let fav = books.some((boo) => boo.idLivro == book);
      console.log(fav);
      setBookFav(fav);
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
                    // flexDirection: "row",
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
                </View>
                <View
                  style={{
                    position: "absolute",
                    right: 5,
                    top: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "#D9B391",
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {bookFav ? (
                      <AntDesign name="heart" size={30} color="#A65A49" />
                    ) : (
                      <AntDesign name="hearto" size={30} color="#A65A49" />
                    )}
                  </View>
                </View>

                <Text
                  numberOfLines={2}
                  {style={{
                    fontSize: 30,
                  }}}
                >
                  {livro.volumeInfo.title}
                </Text>
                <ScrollView <Text
                  numberOfLines={8}
                  style={{
                    fontSize: 18,
                    color: "#2B3640",
                  }}
                >
                  {livro.volumeInfo.description}
                </Text>>
                  <Text
                    // numberOfLines={8}
                    style={{
                      fontSize: 18,
                      color: "#2B3640",
                    }}
                  >
                    {livro.volumeInfo.description}
                  </Text>
                </ScrollView>
              </View>

            {/* <Button title="Voltar" onPress={() => goBack()} /> */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 52,
                  backgroundColor: "#D9B391",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#2B3640",
                  }}
                >
                  Comprar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: "#D9B391",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: -52,
                }}
              >
                <Ionicons name="cart-outline" size={30} color="#A65A49" />
              </TouchableOpacity>
            </View>
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
