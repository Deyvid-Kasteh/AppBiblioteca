import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Book({ navigation: { goBack }, route }) {

  return (
    
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
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
      </View>

      <Button title="Voltar" onPress={() => goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});