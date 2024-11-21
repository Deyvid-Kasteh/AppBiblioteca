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
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import KeyboardDismiss from "../components/components/KeyboardDismiss";
import { ToastAndroid } from "react-native";
import COL


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
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!resultadosLivros ? (
            <Text
              style={{
                color: "#A65A49",
                fontSize: 55,
                fontWeight: "bold",
              }}
            >
              {searchText || "Biblioteca."}
            </Text>
          ) : null}

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
                width: "50%",
                height: 40,
                borderRadius: 40,
                backgroundColor: "#F2E2C4",
                textAlign: "center",
                color: "#2B3640",
              }}
              placeholder="Digite o nome do livro"
              placeholderTextColor="#2B3640"
              onChangeText={(newText) => setSearchText(newText)}
              defaultValue={searchText}
              autoCapitalize="sentences"
            />
            <TouchableOpacity
              onPress={handleSeeBook}
              style={{
                marginLeft: 10,
                width: "10%",
                height: 40,
                // borderWidth: 2,
                borderRadius: 40,
                borderColor: "#A65A49",
                backgroundColor: "#F2E2C4",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="search-sharp" size={24} color="#A65A49" />
            </TouchableOpacity>
            {resultadosLivros && (
              <TouchableOpacity
                onPress={apagar}
                style={{
                  marginLeft: 10,
                  width: "10%",
                  height: 40,
                  // borderWidth: 2,
                  borderRadius: 40,
                  borderColor: "#A65A49",
                  backgroundColor: "#F2E2C4",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="clear" size={24} color="#A65A49" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {resultadosLivros && (
          <View
            style={{
              flex: 0.8,
              width: "100%",
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
                      <>
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
                      </>
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
          }}
        ></View>
      </View>
    </KeyboardDismiss>
  );
}
