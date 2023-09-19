import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";

const ShoppingCart = () => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);
  const navigation = useNavigation();
  const LivrosShoppingCart = usuario?.shoppingCart;
  console.log(LivrosShoppingCart);

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
                    width: "90%",
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
                            padding: 10,
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
                            backgroundColor: "#D9B391",
                          }}
                        >
                          <View>
                            <Text>Preço:</Text>
                          </View>
                          <Viewv style={{
                            display: 'flex'
                                                            backgroundColor: "red",

                          }}>
                            <Text>Quantidade</Text>
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                backgroundColor: "red",
                              }}
                            >
                              <AntDesign
                                name="minuscircleo"
                                size={24}
                                color="black"
                              />

                              <AntDesign
                                name="pluscircleo"
                                size={24}
                                color="black"
                              />
                            </View>
                          </Viewv>
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
