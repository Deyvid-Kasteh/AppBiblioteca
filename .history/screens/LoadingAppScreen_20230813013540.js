import { View, Text, Image, ImageBackground } from "react-native";
import React from 'react'
import bibli from "../assets/images/bibli.jpg";

export default function LoadingAppScreen() {
  const backgroundImage = require("../assets/images/bibli.jpg");
  return (
    <View style=>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>LoadingAppScreen</Text>
      </ImageBackground>
      {/* <Image source={backgroundImage} /> */}
    </View>
  );
}