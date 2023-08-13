import { View, Text, Image } from 'react-native'
import React from 'react'
import bibli from "assets/images/bibli";

export default function LoadingAppScreen() {
  const backgroundImage = require('assets/images/bibli')
  return (
    <View>
      <Text>LoadingAppScreen</Text>
      <Image source={backgroundImage} />
    </View>
  );
}