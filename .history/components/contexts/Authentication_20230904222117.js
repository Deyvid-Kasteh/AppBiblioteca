import React, { createContext, useState } from "react";
import { ToastAndroid } from "react-native";

import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, createSession } from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigation = useNavigation();

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const showToastAndroid = (text) => {
    ToastAndroid.showWithGravityAndOffset(
      `${text}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  // Inscrição sem google (SignInScreen)
  SignIn = async function (name, email, password) {
    console.log("Começou INSCRIÇÃO");
    const data = {
      name,
      email,
      password,
    };

    try {
      const response = await api.post("/users", data);
      showToastAndroid("✅ Inscrição efetuada com sucesso! 🥳");
      navigation.navigate("Login");
      return;
    } catch (error) {
      console.log("veio pro error SignIn");
      console.error(error);
    }
  };

  SignInGoogleProcess = async () => {
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      const signInResult = await GoogleSignin.signIn();
      const data = {
        name: signInResult.user.name,
        email: signInResult.user.email,
        password: signInResult.user.id,
      };
      console.log(data);
      const pic = signInResult.user.photo;
      try {
        const responseSignInMongoDb = await api.post("/users", data);
        if (responseSignInMongoDb !== null) {
          try {
            const responseCreateSession = await createSession(
              signInResult.user.email,
              signInResult.user.id
            );
            api.defaults.headers.authorization = `Bearer ${responseCreateSession.data.token}`;
            const dataPic = {
              pic,
            };
            await api.patch(
              `/Perfil/${responseCreateSession.data.user.id}/pic`,
              dataPic
            );
            const responseUpdated = await api.get(
              `/Perfil/${responseCreateSession.data.user.id}`
            );
            const jsonValue = JSON.stringify(responseUpdated.data);
            await AsyncStorage.setItem("@user", jsonValue);
            setUsuario(() => responseUpdated.data);
            setUsuarioEstaLogado(true);
            showToastAndroid("✅ Inscrição efetuada com sucesso! 🥳");
            showToastAndroid(`Bem vindo! ${signInResult.user.name} 🥳`);

            navigation.navigate("HomeStart");
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.error(error);
      }
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
  // Login sem google (loginScreen)
  Login = async function (email, password) {
    console.log("Começou CONTEXT");

    try {
      const response = await createSession(email, password);
      api.defaults.headers.authorization = `Bearer ${response.data.token}`;
      console.log(response.data.token);
      const responseUpdated = await api.get(`/Perfil/${response.data.user.id}`);

      console.log("Começou STOREDATA");
      const jsonValue = JSON.stringify(responseUpdated.data);
      console.log(jsonValue);
      await AsyncStorage.setItem("@user", jsonValue);
      setUsuario(responseUpdated.data);
      setUsuarioEstaLogado(true);
      console.log("vai pro navigate pra voltar");
      navigation.navigate("HomeStart");
      showToastAndroid(`Bem vindo! ${response.data.user.name} 🥳`);

      return;
    } catch (error) {
      console.log("veio pro error");
      console.error(error);
    }
  };

  // Login COM google (loginScreen)

  SignInProcess = async () => {
    GoogleSignin.configure();
    try {
      console.log("Começou SIGN-IN");
      await GoogleSignin.hasPlayServices();
      const signInResult = await GoogleSignin.signIn();
      console.log(signInResult);
      if (signInResult !== null) {
        try {
          const responseCreateSession = await createSession(
            signInResult.user.email,
            signInResult.user.id
          );
          api.defaults.headers.authorization = `Bearer ${responseCreateSession.data.token}`;
          console.log("============= TOKEN ===========");
          console.log(responseCreateSession.data.token);
          console.log("============= TOKEN ===========");
          const responseUpdated = await api.get(
            `/Perfil/${responseCreateSession.data.user.id}`
          );
          const jsonValue = JSON.stringify(responseUpdated.data);
          await AsyncStorage.setItem("@user", jsonValue);
          setUsuario(() => responseUpdated.data);
          setUsuarioEstaLogado(true);
          navigation.navigate("HomeStart");
        } catch (error) {
          console.error(error);
        }
      }
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

  Favoriter = async function (id, idLivro, imgLivro, ttlLivro) {
    console.log("Começou FAVORITER");
    try {
      const response = await api.patch(
        `/Perfil/${id}/addBookToFavorites/${idLivro}`,
        { idLivro, imgLivro, ttlLivro }
      );
      console.log("FOI");

      data = response.data;
      console.log("PROCURAR NOVO LIVRO");
      console.log(data);
      console.log("OLHA PRA CIMA");

      await AsyncStorage.removeItem("@user");
      await AsyncStorage.setItem("@user", JSON.stringify(data));
      setUsuario(data);
    } catch (error) {
      console.error(error);
    }
  };

  Unfavorater = async function (id, idLivro) {
    console.log("Começou UNFAVORITER");
    try {
      const response = await api.delete(
        `/Perfil/${id}/destroyBookfromFavorites/${idLivro}`,
        idLivro
      );
      console.log("FOI");
      data = response.data;
      await AsyncStorage.removeItem("@user");
      await AsyncStorage.setItem("@user", JSON.stringify(data));
      setUsuario(data);
    } catch (error) {
      console.error(error);
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
        Login,
        SignIn,
        SignInGoogleProcess,
        Favoriter,
        Unfavorater,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
