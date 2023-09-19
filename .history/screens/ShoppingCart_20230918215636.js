import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
                        fillColor="#BF7F5A"
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
                          width: "55%",
                          height: 128,
                          borderRadius: 10,
                          overflow: "hidden",
                        }}
                      >
                        <View
                          style={{
                            // backgroundColor: "green",
                            height: 100,
                            flexDirection: "row",
                            flexWrap: "wrap",
                            padding: 10,
                          }}
                        >
                          <Text
                            style={{
                              flexDirection: "row",
                              flexWrap: "wrap",
                            }}
                          >
                            {livro.ttlLivro}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            height: 28,
                            backgroundColor: "#D9B391",
                          }}
                        >
                          <View>
                            <Text>Preço</Text>
                          </View>
                          <View>
                            <Text>Quantidade</Text>
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
          borderTopRRadius: 20,
          borderTopRightRadius
          borderTopLeftRadius: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              // alignSelf: "center",
              padding: 10,
            }}
          >
            Total:
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 0,
              padding: 10,
              alignSelf: "center",
              backgroundColor: "#A65A49",
              borderRadius: 12,
            }}
          >
            <Text>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCart;
