import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import KeyboardDismiss from "../components/components/KeyboardDismiss";
import COLORS from "../components/Colors/Colors";

export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [resultadosLivros, setResultadosLivros] = useState("");

  const myKey = "&key=AIzaSyD0IpRB2DoQ2v82pvzOtl9S6T92xJsytV4";

  const handleSeeBook = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=40${myKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivros(data.items));
    Keyboard.dismiss();
  };

  const apagar = () => {
    setResultadosLivros("");
    setSearchText("");
    Keyboard.dismiss();
  };

  return (
    <KeyboardDismiss>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          {!resultadosLivros ? (
            <Text style={styles.title}>{searchText || "Biblioteca."}</Text>
          ) : null}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome do livro"
              placeholderTextColor={COLORS.charcoal}
              onChangeText={(newText) => setSearchText(newText)}
              defaultValue={searchText}
              autoCapitalize="sentences"
            />
            <TouchableOpacity
              onPress={handleSeeBook}
              style={styles.searchButton}
            >
              <Ionicons name="search-sharp" size={24} color={COLORS.caramel} />
            </TouchableOpacity>
            {resultadosLivros && (
              <TouchableOpacity onPress={apagar} style={styles.clearButton}>
                <MaterialIcons name="clear" size={24} color={COLORS.caramel} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {resultadosLivros && (
          <View style={styles.resultContainer}>
            <ScrollView>
              <View style={styles.booksContainer}>
                {resultadosLivros?.map((livro) => (
                  <View key={livro.id}>
                    {livro.volumeInfo.imageLinks && (
                      <TouchableOpacity
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
                            uri: livro.volumeInfo.imageLinks.thumbnail,
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </KeyboardDismiss>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.sand,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.caramel,
    fontSize: 55,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: "50%",
    height: 40,
    borderRadius: 40,
    backgroundColor: COLORS.cream,
    textAlign: "center",
    color: COLORS.charcoal,
  },
  searchButton: {
    marginLeft: 10,
    width: "10%",
    height: 40,
    borderRadius: 40,
    backgroundColor: COLORS.cream,
    justifyContent: "center",
    alignItems: "center",
  },
  clearButton: {
    marginLeft: 10,
    width: "10%",
    height: 40,
    borderRadius: 40,
    backgroundColor: COLORS.cream,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainer: {
    flex: 0.8,
    width: "100%",
    marginTop: 30,
  },
  booksContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bookItem: {
    borderWidth: 1,
    borderColor: COLORS.ivory,
    borderRadius: 10,
    overflow: "hidden",
    margin: 8,
  },
  bookImage: {
    width: 80,
    height: 128,
  },
};