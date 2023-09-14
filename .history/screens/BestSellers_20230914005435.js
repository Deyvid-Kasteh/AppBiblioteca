import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/contexts/Authentication";



export default function BestSellers({ navigation }) {

  const { apiKey } = useContext(AuthContext);
  const nomeDaObraBestSellers = "best sellers";
  const [resultadosLivrosBestSellers, setResultadosLivrosBestSellers] =
    useState();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraBestSellers}&maxResults=30${apiKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosBestSellers(() => data.items))
      .then(console.log("fetch Best Sellers"))
      .then(console.log(apiKey));

  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F2E2C4",
      }}
    >
      {resultadosLivrosBestSellers ? (
        <View
          style={{
            flex: 0.88,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {resultadosLivrosBestSellers?.map((livro) => (
                <View key={livro.id}>
                  {livro.volumeInfo.imageLinks ? (
                    <TouchableOpacity
                      key={livro.id}
                      style={{
                        borderWidth: 1,
                        borderColor: "#f5efe1",
                        borderRadius: 10,
                        overflow: "hidden",
                        margin: 8,
                      }}
                      onPress={() => {
                        navigation.navigate("HomeStackRoutes", {
                          screen: "Book",
                          params: {
                            idLivro: livro.id,
                          },
                        });
                      }}
                    >
                      <Image
                        style={{
                          width: 80,
                          height: 128,
                        }}
                        source={{
                          uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
                        }}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))}

              <TouchableOpacity
                key=""
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  borderRadius: 10,
                  overflow: "hidden",
                  margin: 8,
                }}
              >
                <Image
                  style={{
                    width: 80,
                    height: 128,
                  }}
                  source={{
                    uri: "http://books.google.com/books/content?id=yjUQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                  }}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      ) : (
        <Text>BestSellers Não tem livros</Text>
      )}
    </View>
  );
}
