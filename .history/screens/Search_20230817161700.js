import {
  Text,
  ImageBackground,
  TextInput,
  View,
  Pressable,
  Keyboard,
  ScrollView,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [resultadosLivros, setResultadosLivros] = useState("");
  const handleSeeBook = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=40`,
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
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#D9B391",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 0.15,
          width: "100%",
          // backgroundColor: "orange",
          alignItems: "center",
          justifyContent: "center",
          // flexDirection: "row",
        }}
      >
        <Text style={{ color: "white", fontSize: 55 }}>
          {searchText || "Biblioteca."}
        </Text>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              // display: "none",
              width: "50%",
              height: 40,
              borderWidth: 2,
              borderRadius: 40,
              borderColor: "white",
              textAlign: "center",
              color: "white",
            }}
            // <Ionicons name="md-search" size={25} color={"white"} />}

            placeholder="Digite o nome do livro"
            placeholderTextColor="white"
            onChangeText={(newText) => setSearchText(newText)}
            defaultValue={searchText}
            autoCapitalize="sentences"
          />
          <TouchableOpacity
            onPress={handleSeeBook}
            style={{
              // display: "none",
              marginLeft: 20,
              width: "10%",
              height: 40,
              borderWidth: 2,
              borderRadius: 40,
              borderColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="search-sharp" size={24} color="white" />
            {/* <Text>Press Here</Text> */}
          </TouchableOpacity>
          {resultadosLivros && (
            <TouchableOpacity
              onPress={apagar}
              style={{
                marginLeft: 20,
                width: "10%",
                height: 40,
                borderWidth: 2,
                borderRadius: 40,
                borderColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="clear" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {resultadosLivros && (
        <View
          style={{
            flex: 0.75,
            width: "100%",
            // backgroundColor: "green",
            marginTop: 30,
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
              {resultadosLivros?.map((livro) => (
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
      )}
      <View
        style={{
          flex: 0.1,
          width: "100%",
          // backgroundColor: "red",
          // width: "100%",
          // height: "5%",
        }}
      ></View>
    </View>
  );
}