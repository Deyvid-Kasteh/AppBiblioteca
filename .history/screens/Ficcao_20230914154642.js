import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState, useContext } from "react";

export default function Ficcao({ navigation }) {

  const nomeDeAutorFiccao = "subject:fiction";
  const [resultadosLivrosFiccao, setResultadosLivrosFiccao] = useState();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDeAutorFiccao}&maxResults=30${apiKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosFiccao(() => data.items))
      .then(console.log("fetch ficcao"));
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
      {resultadosLivrosFiccao ? (
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
              {resultadosLivrosFiccao?.map((livro) => (
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
            </View>
          </ScrollView>
        </View>
      ) : (
        <Text>BestSellers Não tem livros</Text>
      )}
    </View>
  );
}
