import { View, Text, Image } from 'react-native'
import React from 'react'
// import bibli from "assetsimages\bibli.jpg";

export default function LoadingAppScreen() {
  // const backgroundImage = require('assets\images\bibli.jpg')
  return (
    <View>
      <Text>LoadingAppScreen</Text>
      <Image source={bibli} />
    </View>
  );
}