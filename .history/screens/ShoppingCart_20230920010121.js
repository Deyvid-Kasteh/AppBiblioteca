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
                // backgroundColor: "#2B3640",
              }}
              text="TUDO"
              textStyle={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#2B3640",
                textDecorationLine: "none",
              }}
              size={25}
              fillColor="#D9B391"
              unfillColor="#f5efe1"
              innerIconStyle={{ borderWidth: 3 }}
              // onPress={(isChecked: boolean) => {}}
            />
            {/* <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#2B3640",
              }}
            >
              TUDO
            </Text> */}
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
        {usuarioEstaLogado ? (
          <ScrollView>
            <View
              style={{
                flex: 1,
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
                  {livro.imgLivro ? (
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
                          // backgroundColor: "#2B3640",
                        }}
                        size={25}
                        fillColor="#D9B391"
                        unfillColor="#f5efe1"
                        innerIconStyle={{ borderWidth: 3 }}
                        // onPress={(isChecked: boolean) => {}}
                      />
                      <TouchableOpacity
                        key={livro.idLivro}
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
                              idLivro: livro.idLivro,
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
                            uri: `${livro.imgLivro}`,
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
                            // backgroundColor: "green",
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
                            {livro.ttlLivro}
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
                              backgroundColor: "green",
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
                                  {preco}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              backgroundColor: "green",
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
                              <TouchableOpacity
                                onPress={() => setQuantidade(quantidade - 1)}
                              >
                                <AntDesign
                                  name="minuscircleo"
                                  size={18}
                                  color="#2B3640"
                                />
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
                              <TouchableOpacity
                                onPress={() => setQuantidade(quantidade + 1)}
                              >
                                <AntDesign
                                  name="pluscircleo"
                                  size={18}
                                  color="#2B3640"
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              backgroundColor: "green",
                              width: 40,
                              alignItems: "center",
                              justifyContent: "flex-end",
                            }}
                          >
                            <View
                              style={{
                                display: "flex",
                                backgroundColor: "white",
                                padding: 4,
                                borderRadius: 16,
                                alignItems: "center",
                                justifyContent: "flex-end",
                                marginBottom: 10,
                                marginLeft: 10,
                              }}
                            >
                              <Ionicons
                                name="ios-trash-outline"
                                size={24}
                                color="#2d3741"
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  ) : null}
                </View>
              ))}
            </View>
          </ScrollView>
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
      <View
        style={{
          flex: 0.12,
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
  );
};

export default ShoppingCart;
