import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons";

import ItemShoppingCartComponent from "./ItemShoppingCartComponent";

const ShoppingCart = () => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);
  const navigation = useNavigation();
  const LivrosShoppingCart = usuario?.shoppingCart;
  const [precoTotal, setPrecoTotal] = useState(0);

  console.log(usuario);




  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#F2E2C4",
        // backgroundColor: "green",
      }}
    >
      {usuarioEstaLogado ? (
        <View
          style={{
            flex: 1,
            width: "100%",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 0.09,
              width: "100%",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#f5efe1",
                width: "95%",
                height: 40,
                margin: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <BouncyCheckbox
                  style={{
                    margin: 0,
                    marginLeft: 10,
                  }}
                  text="TUDO"
                  textStyle={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#2B3640",
                    textDecorationLine: "none",
                  }}
                  isChecked={false}
                  // disableBuiltInState
                  size={25}
                  fillColor="#D9B391"
                  unfillColor="#f5efe1"
                  innerIconStyle={{ borderWidth: 3 }}
                  onPress={() => }
                />
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Ionicons name="ios-trash-outline" size={24} color="#2d3741" />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#2d3741",
                  }}
                >
                  EXCLUIR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            style={{
              flex: 0.01,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <View
              style={{
                // flex: 0.1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {LivrosShoppingCart?.map((livro) => (
                <View
                  style={{
                    backgroundColor: "#f5efe1",
                    width: "95%",
                    height: 150,
                    margin: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  key={livro.idLivro}
                >
                  <ItemShoppingCartComponent
                    idLivro={livro.idLivro}
                    imgLivro={livro.imgLivro}
                    ttlLivro={livro.ttlLivro}
                    price={livro.price}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          <View
            style={{
              flex: 0.2,
              width: "100%",
              backgroundColor: "#D9B391",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-start",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                marginTop: 10,
                position: "absolute",
                top: 0,
                left: 0,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  padding: 10,
                  fontSize: 20,
                  color: "#2d3741",
                }}
              >
                Total:
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#2B3640",
                }}
              >
                {precoTotal}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                marginTop: 10,
                position: "absolute",
                right: 16,
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  alignSelf: "center",
                  backgroundColor: "#BF7F5A",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#2d3741",
                  }}
                >
                  Comprar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  );
};

export default ShoppingCart;
