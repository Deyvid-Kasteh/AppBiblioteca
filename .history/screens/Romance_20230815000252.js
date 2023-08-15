import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";

export default function Romance({ navigation }) {
  const nomeDaObraRomance = "subject:romance";
  const [resultadosLivrosRomance, setResultadosLivrosRomance] = useState();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraRomance}&maxResults=20`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosRomance(() => data.items))
      .then(console.log("fetch romance"));
  }, []);

  return (
    <View
      style={{
        flex: 0.88,
        alignItems: "center",
        justifyContent: "flex-start",
        // width: "100%",
        // height: "100%",
      }}
    >
      {resultadosLivrosRomance ? (
        <View
          style={{
            flex: 1,
            width: "100%",
            // backgroundColor: "green",
            // marginTop: 30,
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
              {resultadosLivrosRomance?.map((livro) => (
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
                            name: `${livro.volumeInfo.title}`,
                            description: `${livro.volumeInfo.description}`,
                            image: `${livro.volumeInfo.imageLinks.thumbnail}`,
                          },
                          // initial: false,
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
