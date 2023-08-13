import { View, Text, Image } from 'react-native'
import React from 'react'
//
export default function LoadingAppScreen() {
  const backgroundImage = require(../)
  return (
    <View>
      <Text>LoadingAppScreen</Text>
      <Image source={backgroundImage} />
    </View>
  );
}