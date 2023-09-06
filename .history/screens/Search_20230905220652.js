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
import KeyboardDismiss from "../components/components/KeyboardDismiss";

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
    <KeyboardDismiss></KeyboardDismiss>
    
  );
}