import React, { useEffect, useState, useContext } from "react";
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
import { api } from "../services/api";
import { buscaLivroPorId } from "../services/api";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../components/contexts/Authentication";

import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";

export default function Book({ navigation: { goBack }, route }) {
  const { usuarioEstaLogado, usuario, Favoriter, Unfavorater } =
    useContext(AuthContext);

  const [livro, setLivro] = useState(null);
  const [bookFav, setBookFav] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);
  const book = route.params.idLivro;

  const bookfavoriter = async () => {
    try {
      if (usuarioEstaLogado) {
        const id = usuario._id;
        const idLivro = route.params.idLivro;
        const ttlLivro = livro.volumeInfo.title;
        const imgLivro = livro.volumeInfo.imageLinks.thumbnail;
        console.log("ID");
        console.log(id);
        console.log("IDLIVRO:");
        console.log(idLivro);
        console.log("");
        console.log(ttlLivro);
        console.log();
        console.log(imgLivro);

        if (!bookFav) {
          console.log("Favoritar");
          Favoriter(id, idLivro, imgLivro, ttlLivro);
          setBookFav(true);
        } else {
          Unfavorater(id, idLivro);
          setBookFav(false);
        }
      } else {
        setBookFav(false);
        console.log("Por favor faça login");
      }
    } catch (error) {}
  };

  const getData = async () => {
    try {
      if (usuarioEstaLogado) {
        const jsonValue = await AsyncStorage.getItem("@user");
        const data = JSON.parse(jsonValue);
        const books = data.books;
        let fav = books.some((boo) => boo.idLivro == book);
        console.log(fav);
        setBookFav(fav);
      }
    } catch (e) {
      // error reading value
    }
  };

  BuscaLivro = async (idLivro) => {
    const response = await buscaLivroPorId(idLivro);
    // console.log(response.data);
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
                <TouchableOpacity
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#D9B391",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => bookfavoriter()}
                >
                  {bookFav ? (
                    <AntDesign name="heart" size={30} color="#A65A49" />
                  ) : (
                    <AntDesign name="hearto" size={30} color="#A65A49" />
                  )}
                </TouchableOpacity>
              </View>

              <Text
                numberOfLines={2}
                style={{
                  fontSize: 30,
                  color: "#2B3640",
                }}
              >
                {livro.volumeInfo.title}
              </Text>

              <View
                style={{
                  height: 164,
                }}
              >
                <ScrollView>
                  <Text
                    // numberOfLines={8}
                    style={{
                      fontSize: 16,
                      color: "#2B3640",
                    }}
                  >
                    {/* {livro.volumeInfo.description} */}
                    {livro
                      ? sanitizeHtml(livro.volumeInfo.description, {
                          allowedTags: [],
                        })
                      : livro.volumeInfo.description}
                  </Text>
                </ScrollView>
              </View>
            </View>

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
                  borderWidth: 2,
                  borderColor: "#A65A49",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#2d3741",
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
                onPress={() => setShoppingCart(!shoppingCart)}
              >
                {shoppingCart ? (
                  <Ionicons name="cart-sharp" size={30} color="#A65A49" />
                ) : (
                  <Ionicons name="cart-outline" size={30} color="#A65A49" />
                )}
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
