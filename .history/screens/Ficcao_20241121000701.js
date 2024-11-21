
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../components/Colors/Colors";

export default function Ficcao({ navigation }) {
  const nomeDeAutorFiccao = "subject:fiction";
  const [resultadosLivrosFiccao, setResultadosLivrosFiccao] = useState();
  const myKey = "&key=AIzaSyD0IpRB2DoQ2v82pvzOtl9S6T92xJsytV4";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDeAutorFiccao}&maxResults=40${myKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosFiccao(() => data.items))
      .then(() => console.log("fetch ficcao"));
  }, []);

  return (
    <View style={styles.container}>
      {resultadosLivrosFiccao ? (
        <View style={styles.resultsContainer}>
          <ScrollView>
            <View style={styles.booksWrapper}>
              {resultadosLivrosFiccao?.map((livro) => (
                <View key={livro.id}>
                  {livro.volumeInfo.imageLinks ? (
                    <TouchableOpacity
                      key={livro.id}
                      style={styles.bookItem}
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
                        style={styles.bookImage}
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
        <Text style={styles.noBooksText}>Ficção Não tem livros</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.cream, // Usando a cor cream de COLORS
  },
  resultsContainer: {
    flex: 0.88,
    width: "100%",
    overflow: "hidden",
  },
  booksWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bookItem: {
    borderWidth: 1,
    borderColor: COLORS.ivory, // Usando a cor ivory de COLORS
    borderRadius: 10,
    overflow: "hidden",
    margin: 8,
  },
  bookImage: {
    width: 80,
    height: 128,
  },
  noBooksText: {
    fontSize: 18,
    color: COLORS.charcoal, // Usando a cor charcoal de COLORS
    textAlign: "center",
    marginTop: 20,
  },
});
