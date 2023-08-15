import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function Book({ navigation: { goBack }, route }) {
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
          flex: 0.95,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          paddingBottom: 20,
          backgroundColor: "#BF7F5A",
        }}
      >
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 240,
                height: 384,
              }}
              source={{
                uri: `${route.params.image}`,
              }}
            />
            <Text
              numberOfLines={2}
              style={{
                fontSize: 30,
              }}
            >
              {route.params.name}
            </Text>
            <Text numberOfLines={8}>{route.params.description}</Text>
          </View>
        </ScrollView>
        <View
          
        >
          <Button title="Voltar" onPress={() => goBack()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
