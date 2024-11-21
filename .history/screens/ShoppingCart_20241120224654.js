
import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../components/Colors/Colors";

import ItemShoppingCartComponent from "./ItemShoppingCartComponent";

const ShoppingCart = () => {
  const { usuarioEstaLogado, usuario, changeAllCheckboxStates } =
    useContext(AuthContext);
  const navigation = useNavigation();
  const LivrosShoppingCart = usuario?.shoppingCart;
  const [precoTotal, setPrecoTotal] = useState(0);
  const [checkAllBooks, setCheckAllBooks] = useState(false);
  const [forceRender, setForceRender] = useState(false);

  const precoTotalFunction = () => {
    if (usuarioEstaLogado) {
      const bookChecked = usuario.shoppingCart.filter(
        (checked) => checked.checkboxState === true
      );
      if (bookChecked.length > 0) {
        const valor = bookChecked.reduce((acumulador, elemento) => {
          return acumulador + elemento.price * elemento.quantity;
        }, 0);
        setPrecoTotal(valor.toFixed(2));
      } else {
        setPrecoTotal(0);
        console.log("NÃO TEM CHECKED");
      }
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      {usuarioEstaLogado ? (
        <View style={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  style={styles.checkbox}
                  text="TUDO"
                  textStyle={styles.checkboxText}
                  isChecked={checkAllBooks}
                  disableBuiltInState
                  size={25}
                  fillColor={COLORS.creamDark}
                  unfillColor={COLORS.cream}
                  innerIconStyle={styles.checkboxIcon}
                  onPress={() => {
                    setCheckAllBooks(!checkAllBooks);
                    changeAllCheckboxStates(checkAllBooks);
                    setForceRender(() => !forceRender);
                    precoTotalFunction();
                  }}
                />
              </View>
              <TouchableOpacity style={styles.trashButton}>
                <Ionicons
                  name="ios-trash-outline"
                  size={24}
                  color={COLORS.charcoal}
                />
                <Text style={styles.trashText}>EXCLUIR</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.booksContainer}>
              {usuario?.shoppingCart?.map((livro, index) => (
                <View style={styles.bookItemContainer} key={livro.idLivro}>
                  <ItemShoppingCartComponent
                    index={index}
                    checkboxState={livro.checkboxState}
                    idLivro={livro.idLivro}
                    imgLivro={livro.imgLivro}
                    ttlLivro={livro.ttlLivro}
                    price={livro.price}
                    quantity={livro.quantity}
                    checkAllBooks={checkAllBooks}
                    precoTotalFunction={precoTotalFunction}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>{precoTotal}</Text>
            </View>
            <View style={styles.purchaseButtonContainer}>
              <TouchableOpacity style={styles.purchaseButton}>
                <Text style={styles.purchaseButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.loginPrompt}>Por favor faça login</Text>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.cream,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 0.09,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContent: {
    backgroundColor: COLORS.ivory,
    width: "95%",
    height: 40,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 0,
    marginLeft: 10,
  },
  checkboxText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.charcoal,
    textDecorationLine: "none",
  },
  checkboxIcon: {
    borderWidth: 3,
  },
  trashButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  trashText: {
    fontSize: 12,
    color: COLORS.charcoal,
  },
  scrollView: {
    flex: 0.01,
    width: "100%",
    overflow: "hidden",
  },
  booksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bookItemContainer: {
    backgroundColor: COLORS.ivory,
    width: "95%",
    height: 150,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  footer: {
    flex: 0.2,
    width: "100%",
    backgroundColor: COLORS.creamDark,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  totalContainer: {
    display: "flex",
    marginTop: 10,
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  totalText: {
    padding: 10,
    fontSize: 20,
    color: COLORS.charcoal,
  },
  totalPrice: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.charcoalDark,
  },
  purchaseButtonContainer: {
    display: "flex",
    marginTop: 10,
    position: "absolute",
    right: 16,
  },
  purchaseButton: {
    padding: 10,
    alignSelf: "center",
    backgroundColor: COLORS.accent,
    borderRadius: 20,
  },
  purchaseButtonText: {
    fontSize: 20,
    color: COLORS.charcoal,
  },
  loginPrompt: {
    alignSelf: "center",
    color: COLORS.charcoal,
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default ShoppingCart;
