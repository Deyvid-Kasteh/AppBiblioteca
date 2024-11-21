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
import COLORS from "../components/Colors/Colors"; // Importando a constante de cores

export default function LoginScreen({ navigation }) {
  const { LoginGoogleProcess, Login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email === "" || password === "") {
      return;
    }
    if (password.length <= 7) {
      return;
    }
    try {
      console.log("Login");
      Login(email, password);
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
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(newEmail) => setEmail(newEmail)}
              defaultValue={email}
              backgroundColor={COLORS.cream}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(newPassword) => setPassword(newPassword)}
              defaultValue={password}
              secureTextEntry={true}
              backgroundColor={COLORS.cream}
            />
            <View style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.socialLoginContainer}>
            <Text style={styles.socialLoginText}>Ou entre com:</Text>
          </View>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => LoginGoogleProcess()}
          >
            <Ionicons name="logo-google" size={35} color={COLORS.cream} />
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
  },
  forgotPasswordContainer: {
    width: "80%",
  },
  forgotPasswordText: {
    color: COLORS.caramel,
    alignSelf: "flex-end",
    marginBottom: 40,
    marginRight: 10,
  },
  button: {
    height: 40,
    width: 250,
    backgroundColor: COLORS.caramel,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 70,
  },
  buttonText: {
    color: COLORS.cream,
    fontSize: 25,
    fontWeight: "bold",
  },
  socialLoginContainer: {
    width: "80%",
  },
  socialLoginText: {
    color: COLORS.cream,
    alignSelf: "center",
    marginBottom: 10,
    marginRight: 10,
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
});
