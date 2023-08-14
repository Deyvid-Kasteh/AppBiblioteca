import React, { createContext } from 'react';

export const AuthContext =  createContext({})

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{nome:}}>
            {children}
        </AuthContext.Provider>
    )
}