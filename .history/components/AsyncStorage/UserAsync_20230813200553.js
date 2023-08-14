import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
 const UserAsync = {
    // ============================================== AsyncStorage ==========================
    storeData = async (value) => {
    try {
      console.log("Começou STOREDATA");
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
      console.log("Deu certo STOREDATA");
    } catch (e) {
      // saving error
    }
     },


     

    // async function storeData(value) {
    //     try {
    //       console.log("Começou STOREDATA");
    //       const jsonValue = JSON.stringify(value);
    //       await AsyncStorage.setItem("@user", jsonValue);
    //       console.log("Deu certo STOREDATA");
    //     } catch (e) {
    //       // saving error
    //     }
    // }



  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");
      console.log("começou GETDATA");
      console.log(jsonValue);
      console.log("terminou GETDATA");
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

}


export default UserAsync
