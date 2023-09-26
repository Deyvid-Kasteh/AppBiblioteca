import React, { createContext, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageContext = createContext({});


function AsyncStorageProvider({ children }) {


    GetUser = A











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
