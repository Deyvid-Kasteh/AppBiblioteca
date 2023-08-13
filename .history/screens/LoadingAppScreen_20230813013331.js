import { View, Text, Image, ImageBackground } from "react-native";
import React from 'react'
import bibli from "../assets/images/bibli.jpg";

export default function LoadingAppScreen() {
  const backgroundImage = require("../assets/images/bibli.jpg");
  return (
    <View>
      <ImageBackground source={backgroundImage} resizeMode="cover">
        <Text>LoadingAppScreen</Text>
      </ImageBackground>
      {/* <Image source={backgroundImage} /> */}
    </View>
  );
}