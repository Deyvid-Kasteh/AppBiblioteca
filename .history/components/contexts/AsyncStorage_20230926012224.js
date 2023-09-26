import { View, Text } from "react-native";
import React from "react";

export default function AsyncStorage() {
  GetUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
    console.log();
    }

    console.log("Done.");
  };

  return (
    <View>
      <Text>AsyncStorage</Text>
    </View>
  );
}
