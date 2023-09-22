import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../components/contexts/Authentication";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ItemShoppingCartComponent = ({ idLivro, imgLivro, ttlLivro, price }) => {
  const { usuario, RemoveFromCart } = useContext(AuthContext);
  const navigation = useNavigation();
  const [quantidade, setQuantidade] = useState(1);

  const handleQuantity = (action) => {
    if (action === "decrease") {
      if (quantidade === 1) {
        return;
      } else {
        setQuantidade(quantidade - 1);
      }
    } else if (action === "increase") {
      setQuantidade(quantidade + 1);
    }
  };

  return (
      
  );
};

export default ItemShoppingCartComponent;
