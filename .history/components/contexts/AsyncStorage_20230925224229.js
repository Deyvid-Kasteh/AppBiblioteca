import React, { createContext, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageContext = createContext({});


function AsyncStorageProvider({ children }) {











    return (
        <AsyncStorageContext.Provider
            value={{
                te
            }}></AsyncStorageContext.Provider>
    )
}


export default AsyncStorageProvider;
