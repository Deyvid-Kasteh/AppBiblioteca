import React, { createContext, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageContext = createContext({});


function AsyncStorageProvider({ children }) {











    return (
        <AsyncStorageContext.Provide></AsyncStorageContext.Provide>
    )
}


export default AsyncStorageProvider;
