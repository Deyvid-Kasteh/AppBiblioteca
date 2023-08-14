import React, { createContext } from 'react';

export const AuthContext =  createContext({})

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{nome: "Deyvid Kasteh"}}>
            {children}
        </AuthContext.Provider>
    )
}

export default 