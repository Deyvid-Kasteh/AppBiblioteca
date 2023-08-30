import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";





const Favorites = () => {
  const {usuarioEstaLogado, usuario } =
    useContext(AuthContext);
  const navigation = useNavigation();
  const nomeDaObraBestSellers = "best sellers";
  const [resultadosLivrosBestSellers, setResultadosLivrosBestSellers] =
    useState();
  const LivrosFavoritos = usuario.books;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F2E2C4",
      }}
    >
      {usuarioEstaLogado ? (
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
              {LivrosFavoritos?.map((livro) => (
                <View key={livro.idLivro}>
                  {livro.imgLivro ? (
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
                            name: livro.volumeInfo.title,
                            description: livro.volumeInfo.description,
                            image: livro.volumeInfo.imageLinks.thumbnail,
                            livroImageAll: livro.volumeInfo.imageLinks,
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
        <Text>Por favor faça login</Text>
      )}
    </View>
  );
};

export default Favorites;