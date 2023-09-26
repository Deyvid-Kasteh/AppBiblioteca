import React, { createContext, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageContext = createContext({});

function AsyncStorageProvider({ children }) {
  GetUser = async function () {
    try {
      const jsonValue = await AsyncStorage.getItem("@");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }

    console.log("Done.");
  };

  return (
    <AsyncStorageContext.Provider
      value={
        {
          // teste
        }
      }
    >
      {children}
    </AsyncStorageContext.Provider>
  );
}

export default AsyncStorageProvider;
