import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

export default function UserAsync() {
  // ============================================== AsyncStorage ==========================
  const storeData = async (value) => {
    try {
      console.log("Começou STOREDATA");
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
      console.log("Deu certo STOREDATA");
    } catch (e) {
      // saving error
    }
  };

    useAsyncStorage


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");
      console.log("começou get data");
      console.log(jsonValue);
      console.log("terminou get data");
      if (jsonValue != null) {
        return jsonValue;
      } else {
        return null;
      }
    } catch (e) {
      // error reading value
    }
  };
  // ============================================== AsyncStorage ==========================

  return (
    <View>
      <Text>UserAsync</Text>
    </View>
  );
}