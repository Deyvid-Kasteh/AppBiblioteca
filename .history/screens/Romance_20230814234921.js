import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";

export default function Romance({ navigation }) {
  const nomeDaObraRomance = "a megera";
  const [resultadosLivrosRomance, setResultadosLivrosRomance] = useState();

  useEffect(() => {
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
      .then((data) => setResultadosLivrosRomance(() => data.items))
      .then(console.log("fetch romance"));
  }, []);

  return (
    <View>
      <Text>Romance</Text>
    </View>
  );
}
