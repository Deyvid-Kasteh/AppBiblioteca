import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Book({ navigation: { goBack }, route }) {

  return (
    <View
      style={{
        flex: 0.7,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            backgroundColor: "#A65A49",
            paddingTop: 20,
          }}
        >
          <Image
            style={{
              width: 240,
              height: 384,
              marginBottom: 20,
            }}
            source={{
              uri: `${route.params.image}`,
            }}
          />
          <Text
            numberOfLines={2}
            style={{
              fontSize: 40,
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