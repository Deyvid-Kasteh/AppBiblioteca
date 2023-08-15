import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Book({ navigation: { goBack }, route }) {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // margin: 10,
        backgroundColor: "#F2E2C4",
      }}
    >
      <ScrollView
        style={{
          flex: 0.8,
          // justifyContent: "center",
          // alignItems: "center",
          margin: 10,
          // backgroundColor: "#A65A49",
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            // backgroundColor: "#A65A49",
            paddingTop: 10,
            paddingBottom: 20,
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
          <Button title="Voltar" onPress={() => goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
});