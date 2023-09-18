import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";

const ShoppingCart = () => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);
  const navigation = useNavigation();
  const LivrosShoppingCart = usuario?.shoppingCart;
  console.log(LivrosShoppingCart);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2E2C4",
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
                    <>
                      <TouchableOpacity
                        key={livro.idLivro}
                        style={{
                          borderWidth: 1,
                          borderColor: "#f5efe1",
                          borderRadius: 10,
                          overflow: "hidden",
                          margin: 8,
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
                          width: "70%",
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
                            Descrição: {livro.ttlLivro}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            height: 28,
                            backgroundColor: "orange",
                          }}
                        >
                          <View>
                            <Text>Quantidade</Text>
                          </View>
                          <View>
                            <Text>Preço</Text>
                          </View>
                        </View>
                      </View>
                    </>
                  ) : null}
                </View>
              ))}
            </View>
          </ScrollView>
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
