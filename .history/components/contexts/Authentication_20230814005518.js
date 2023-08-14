import React, { createContext } from 'react';

export const AuthContext =  createContext({})

function AuthProvider({ children }) {
    SignInProcess = async () => {
           GoogleSignin.configure();

       try {
         console.log("Começou SIGN-IN");
         await GoogleSignin.hasPlayServices();
         const signInResult = await GoogleSignin.signIn();
         console.log(signInResult);
         console.log("Começou STOREDATA");
         const jsonValue = JSON.stringify(signInResult.user);
         console.log(jsonValue);
         await AsyncStorage.setItem("@user", jsonValue);
       } catch (error) {
         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
           console.error("user cancelled the login flow");
         } else if (error.code === statusCodes.IN_PROGRESS) {
           console.error("operation (e.g. sign in) is in progress already");
         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
           console.error("play services not available or outdated");
         } else {
           console.error("some other error happened");
           console.error(error);
         }
       }
     };






    return (
        <AuthContext.Provider value={{nome: "Deyvid Kasteh"}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider