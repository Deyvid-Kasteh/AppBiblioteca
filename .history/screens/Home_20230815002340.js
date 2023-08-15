import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  Keyboard,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


const Home = ({ navigation: { navigate } }) => {
  // const [loadHomeBooks, setLoadHomeBooks] = useState(0);
  const [resultadosLivrosFantasia, setResultadosLivrosFantasia] = useState();
  const [resultadosLivrosFiccao, setResultadosLivrosFiccao] = useState();
  const [resultadosLivrosRomance, setResultadosLivrosRomance] = useState();
  const [resultadosLivrosGregos, setResultadosLivrosGregos] = useState();
  const nomeDoLivroFantasia = "o castelo animado";
  const nomeDeAutorFiccao = "alienista";
  const nomeDaObraRomance = "a megera";
  const nomeDaObraGrecia = "termopilas"

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDoLivroFantasia}&maxResults=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosFantasia(data.items))
    .then(console.log("fetch fantasia"))

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDeAutorFiccao}&maxResults=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosFiccao(data.items))
      .then(console.log("fetch ficcao"));


    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraRomance}&maxResults=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosRomance(data.items))
      .then(console.log("fetch romance"));

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraGrecia}&maxResults=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosGregos(data.items))
      .then(console.log("fetch termopilas"));

  }, []);

  return (
    <View style={styles.homePage}>
      <View style={styles.homePageBooksGender}>
        <View style={styles.homePageBooksTextGender}>
          <Text style={styles.Bookstext}>Fantasias</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {resultadosLivrosFantasia?.map((livro) => (
            <View key={livro.id}>
              {livro.volumeInfo.imageLinks ? (
                <Pressable
                  key={livro.id}
                  style={{
                    borderWidth: 1,
                    borderColor: "#f5efe1",
                    borderRadius: 10,
                    overflow: "hidden",
                    margin: 2,
                  }}
                  onPress={() => {
                    navigate("Book", {
                      name: `${livro.volumeInfo.title}`,
                      description: `${livro.volumeInfo.description}`,
                      image: `${livro.volumeInfo.imageLinks.thumbnail}`,
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
                </Pressable>
              ) : null}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.homePageBooksGender}>
        <View style={styles.homePageBooksTextGender}>
          <Text style={styles.Bookstext}>Ficção</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                    margin: 2,
                  }}
                  onPress={() => {
                    navigate("Book", {
                      name: `${livro.volumeInfo.title}`,
                      description: `${livro.volumeInfo.description}`,
                      image: `${livro.volumeInfo.imageLinks.thumbnail}`,
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
        </ScrollView>
      </View>
      <View style={styles.homePageBooksGender}>
        <View style={styles.homePageBooksTextGender}>
          <Text style={styles.Bookstext}>Romances</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                    margin: 2,
                  }}
                  onPress={() => {
                    navigate("Book", {
                      name: `${livro.volumeInfo.title}`,
                      description: `${livro.volumeInfo.description}`,
                      image: `${livro.volumeInfo.imageLinks.thumbnail}`,
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
        </ScrollView>
      </View>

      {/* VIEW DE TESTES ----------------------------------------------------- VIEW DE TESTES */}
      {/* VIEW DE TESTES ----------------------------------------------------- VIEW DE TESTES */}
      {/* VIEW DE TESTES ----------------------------------------------------- VIEW DE TESTES */}
      {/* VIEW DE TESTES ----------------------------------------------------- VIEW DE TESTES */}

      <View style={styles.homePageBooksGender}>
        <View style={styles.homePageBooksTextGender}>
          <Text style={styles.Bookstext}>Grécia</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {resultadosLivrosGregos?.map((livro) => (
            <View key={livro.id}>
              {livro.volumeInfo.imageLinks ? (
                <TouchableOpacity
                  key={livro.id}
                  style={{
                    borderWidth: 1,
                    borderColor: "#f5efe1",
                    borderRadius: 10,
                    overflow: "hidden",
                    margin: 2,
                  }}
                  onPress={() => {
                    navigate("Book", {
                      name: `${livro.volumeInfo.title}`,
                      description: `${livro.volumeInfo.description}`,
                      image: `${livro.volumeInfo.imageLinks.thumbnail}`,
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
        </ScrollView>
      </View>
      {/* <Button
        title="Press me"
        onPress={() => setLoadHomeBooks(loadHomeBooks + 1)}
      />
      <View>
        <Text>{loadHomeBooks}</Text>
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  homePage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  homePageView: {
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // brilho da imagem
    // borderRadius: 50,

    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    // color: "#BFA054",
    fontSize: 50,
    // fontFamily: "Roboto_500Medium",
  },
  homePageBooksGender: {
    // flex: 1,
    width: "95%",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "column",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // brilho da imagem
    padding: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    // borderWidth: 2
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // brilho da imagem
  },
  homePageBooksTextGender: {
    justifyContent: "center",
    alignItems: "center",
  },

  profilePageBooks: { flexDirection: "row", flex: 1 },
  // Bookstext: { color: "#BFA054", fontSize: 30 },

  homePageBookView: {
    borderWidth: 1,
    borderColor: "#f5efe1",
    borderRadius: 10,
    overflow: "hidden",
    margin: 2,
  },

  homePageBook: {
    width: 80,
    height: 128,
    // backgroundColor: "red",
  },
});
