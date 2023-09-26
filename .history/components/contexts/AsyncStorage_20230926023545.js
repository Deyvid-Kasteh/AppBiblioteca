import { View, Text } from "react-native";
import React from "react";

export default function AsyncStorage() {
  GetUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }

    console.log("GetUser Done");
  };

  AsyncStorageUpdate = async (data) => {
    await AsyncStorage.removeItem("@user");
    await AsyncStorage.setItem("@user", JSON.stringify(data));

    return data;
  };
}
