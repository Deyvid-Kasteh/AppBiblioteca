import React, { createContext, useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api,  } from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigation = useNavigation();

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  login = async (email, password) => {
    const response = await createSession(email, password);

    // localStorage.setItem("user", JSON.stringify(response.data.user));
    // localStorage.setItem("token", response.data.token);

    // api.defaults.headers.authorization = `Bearer ${response.data.token}`;

    // setUser(response.data.user);


    // console.log(response);
    console.log(response.data.token);

    console.log("veio pro login");
  };

  SignInProcess = async () => {
    GoogleSignin.configure();
    try {
      console.log("Começou SIGN-IN");
      await GoogleSignin.hasPlayServices();
      const signInResult = await GoogleSignin.signIn();
      console.log(typeof signInResult);
      console.log("Começou STOREDATA");
      const jsonValue = JSON.stringify(signInResult.user);
      console.log(jsonValue);
      await AsyncStorage.setItem("@user", jsonValue);
      setUsuarioEstaLogado(true);
      setUsuario(signInResult);
      console.log(signInResult.user.photo);
      navigation.goBack();
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
  signOutProcess = async () => {
    GoogleSignin.configure();

    try {
      await GoogleSignin.signOut();
      // setUserInfo(null); // Remember to remove the user from your app's state as well
      console.log("SAIU");
      console.log("SAIU");
      await AsyncStorage.removeItem("@user");
      console.log("SAIU");
      console.log("SAIU");
      setUsuarioEstaLogado(false);
      setUsuario(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        nome: "Deyvid Kasteh",
        SignInProcess,
        signOutProcess,
        usuarioEstaLogado,
        usuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
