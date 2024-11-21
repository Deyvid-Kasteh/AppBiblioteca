

import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../components/contexts/Authentication";
import KeyboardDismiss from "../components/components/KeyboardDismiss";
import COLO



// // Constante de cores fornecida
// const COLORS = {
//   // Cores mais claras
//   ivory: "#f5efe1", // Um tom suave de bege claro
//   cream: "#F2E2C4", // Cor creme, suave e agradável

//   // Cores intermediárias
//   sand: "#D9B391", // Um tom de areia, suave e neutro
//   cinnamon: "#BF7F5A", // Um tom de canela, quente e aconchegante
//   caramel: "#A65A49", // Um tom de caramelo, quente e terroso

//   // Cor escura
//   charcoal: "#2B3640", // Um tom de carvão, escuro e elegante
// };

export default function SignInScreen({ navigation }) {
  const { SignInGoogleProcess, SignIn } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignIn = async () => {
    try {
      if (name === "" || email === "" || password === "" || rePassword === "") {
        return;
      }
      if (password.length <= 7) {
        return;
      }
      if (password !== rePassword) {
        return;
      }
      console.log("Login");
      SignIn(name, email, password);
      console.log("passou pelo login");
    } catch (error) {
      console.log("veio pro error");
      console.error(error);
    }
  };

  return (
    <KeyboardDismiss>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Inscrição</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(newName) => setName(newName)}
            defaultValue={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(newEmail) => setEmail(newEmail)}
            defaultValue={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={(newPassword) => setPassword(newPassword)}
            defaultValue={password}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme a senha"
            onChangeText={(newPassword) => setRePassword(newPassword)}
            defaultValue={rePassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Inscrever-se</Text>
          </TouchableOpacity>
          <View style={styles.signInOptions}>
            <Text style={styles.signInText}>Ou entre com:</Text>
          </View>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={SignInGoogleProcess}
          >
            <Ionicons name="logo-google" size={35} color={styles.icon.color} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardDismiss>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.sand,
  },
  innerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.caramel,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    height: 40,
    width: "80%",
    marginBottom: 20,
    borderRadius: 16,
    paddingLeft: 20,
    backgroundColor: COLORS.cream,
  },
  button: {
    height: 40,
    width: 250,
    backgroundColor: COLORS.caramel,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 40,
    marginBottom: 70,
  },
  buttonText: {
    color: COLORS.cream,
    fontSize: 25,
    fontWeight: "bold",
  },
  signInOptions: {
    width: "80%",
  },
  signInText: {
    color: COLORS.cream,
    alignSelf: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  googleButton: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.caramel,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  icon: {
    color: COLORS.cream,
  },
});
