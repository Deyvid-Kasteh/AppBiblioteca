import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ShoppingCart = () => {






  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ShoppingCart</Text>
      <Button title="SAIR" onPress={() => signOut()} />
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({});
