import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ShoppingCart = () => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);
  const [quantidade, setQuantidade] = useState(1);
  const navigation = useNavigation();
  const LivrosShoppingCart = usuario?.shoppingCart;
  const [precoTotal, setPrecoTotal] = useState(0);

  const preco = 5.99;
  // console.log(LivrosShoppingCart);

  const handlequantity = (item, action) => {
    if (action === decrease) {

    } else if (action === increase) {

    }


  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#F2E2C4",
      }}
    >
      <View
        style={{
          flex: 0.85,
          width: "100%",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {usuarioEstaLogado ? (
          <></>

        ) : (
          <Text
            style={{
              alignSelf: "center",
            }}
          >
            Por favor faça login
          </Text>
        )}
      </View>

    </View>
  );
};

export default ShoppingCart;
