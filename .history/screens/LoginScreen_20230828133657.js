import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../components/contexts/Authentication";
// import { useNavigation } from "@react-navigation/native";

export default function LoginScreen({ navigation }) {
  const { SignInProcess, Login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleLogin = async () => {
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
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
}
