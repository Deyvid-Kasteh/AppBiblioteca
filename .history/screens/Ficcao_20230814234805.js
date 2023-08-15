import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";

export default function Ficcao({ navigation }) {
  const nomeDeAutorFiccao = "alienista";
  const [resultadosLivrosFiccao, setResultadosLivrosFiccao] = useState();

  //     fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${nomeDeAutorFiccao}&maxResults=10`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //       .then((resp) => resp.json())
  //       .then((data) => setResultadosLivrosFiccao(() => data.items))
  //       .then(console.log("fetch ficcao"));

  return (
    <View>
      <Text>Ficcao</Text>
    </View>
  );
}
