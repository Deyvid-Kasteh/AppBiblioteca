import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../components/contexts/Authentication";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ItemShoppingCartComponent = ({
  index,
  checkboxState,
  idLivro,
  imgLivro,
  ttlLivro,
  price,
  quantity,
  checkAllBooks,
  precoTotalFunction,
}) => {
  const { usuario, ChangeCheckboxState, ChangeBookQuantity, RemoveFromCart } =
    useContext(AuthContext);
  const navigation = useNavigation();
  const [quantidade, setQuantidade] = useState(quantity);
  let quantidadeOperação = quantity;

  const [doRender, setDoRender] = useState(false);

  let tituloLimitado = ttlLivro;
  if (ttlLivro.length > 50) {
    tituloLimitado = ttlLivro.slice(0, 50) + "...";
  }
  let checkboxStateFromUsuario = usuario.shoppingCart[index].checkboxState;

  const handleQuantity = (action) => {
    if (action === "decrease") {
      if (quantidade === 1) {
        return;
      } else {
        console.log(quantidade);
        setQuantidade(() => quantidade - 1);
        console.log(quantidade);
        quantidadeOperação--;
        console.log(quantidadeOperação);
        // ChangeBookQuantity(idLivro, quantidade);
        ChangeBookQuantity(idLivro, quantidadeOperação);
        precoTotalFunction();
      }
    } else if (action === "increase") {
      console.log(quantidade);
      setQuantidade(() => quantidade + 1);
      quantidadeOperação++;
      console.log(quantidade);
      console.log(quantidadeOperação);
      // ChangeBookQuantity(idLivro, quantidade);
      ChangeBookQuantity(idLivro, quantidadeOperação);
      precoTotalFunction();
    }
  };

  useEffect(() => {

  }, [quantidade]);





  return (
    <>
      {imgLivro ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <BouncyCheckbox
            style={{
              margin: 0,
              marginLeft: 10,
            }}
            size={25}
            disableBuiltInState
            isChecked={checkboxStateFromUsuario}
            fillColor="#D9B391"
            unfillColor="#f5efe1"
            innerIconStyle={{ borderWidth: 3 }}
            onPress={() => {
              ChangeCheckboxState(usuario?._id, idLivro);
              precoTotalFunction();
              setDoRender(() => !doRender);
            }}
          />
          <TouchableOpacity
            key={idLivro}
            style={{
              borderWidth: 1,
              borderColor: "#f5efe1",
              borderRadius: 10,
              overflow: "hidden",
              margin: 1,
            }}
            onPress={() => {
              navigation.navigate("HomeStackRoutes", {
                screen: "Book",
                params: {
                  idLivro: idLivro,
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
                uri: `${imgLivro}`,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              // backgroundColor: "blue",
              width: "60%",
              height: 128,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                height: 60,
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 8,
              }}
            >
              <Text
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  fontWeight: "bold",
                }}
              >
                {tituloLimitado}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                height: 60,
                // backgroundColor: "#D9B391",
              }}
            >
              <View
                style={{
                  display: "flex",
                  // backgroundColor: "green",
                  width: 90,
                  alignItems: "center",
                }}
              >
                <Text>Preço:</Text>
                <View
                  style={{
                    display: "flex",
                    width: 90,
                    flexDirection: "row",
                    alignItems: "center",
                    // backgroundColor: "red",
                  }}
                >
                  <Text>$</Text>

                  <View
                    style={{
                      width: 80,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#2B3640",
                      }}
                    >
                      {price}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  // backgroundColor: "green",
                  width: 92,
                  alignItems: "center",
                }}
              >
                <Text>Quantidade:</Text>
                <View
                  style={{
                    display: "flex",
                    width: 90,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: 16,
                    marginTop: 6,
                    // backgroundColor: "red",
                  }}
                >
                  <TouchableOpacity onPress={() => handleQuantity("decrease")}>
                    <AntDesign name="minuscircleo" size={18} color="#2B3640" />
                  </TouchableOpacity>

                  <View
                    style={{
                      width: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#2B3640",
                      }}
                    >
                      {quantidade}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => handleQuantity("increase")}>
                    <AntDesign name="pluscircleo" size={18} color="#2B3640" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  // backgroundColor: "green",
                  width: 40,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    padding: 4,
                    borderRadius: 16,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginBottom: 3,
                    marginLeft: 10,
                  }}
                  onPress={() => RemoveFromCart(usuario?._id, idLivro)}
                >
                  <Ionicons
                    name="ios-trash-outline"
                    size={22}
                    color="#2d3741"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ItemShoppingCartComponent;
