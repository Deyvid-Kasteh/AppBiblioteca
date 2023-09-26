import { View, Text } from "react-native";
import React from "react";

export default function AsyncStorage() {
  GetUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@key");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }

    console.log("Done.");
  };

  return (
    <View>
      <Text>AsyncStorage</Text>
    </View>
  );
}
