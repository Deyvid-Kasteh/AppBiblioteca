// import React, { useContext } from "react";
// import {
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
//   TextInput,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// import { AuthContext } from "../components/contexts/Authentication";
// import { useNavigation } from "@react-navigation/native";
// import Avatar from "../assets/Avatar/Avatar";
// import COLORS from "../components/Colors/Colors";

// export default function SignOutScreen() {
//   const { signOutProcess, usuarioEstaLogado, usuario } =
//     useContext(AuthContext);
//   const navigation = useNavigation();
//   console.log(usuario);
//   return (
//     <>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: "#D9B391",
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               justifyContent: "space-around",
//               alignItems: "center",
//             }}
//           >
//             <Avatar width={110} height={110} />

//             <Text>
//               O usuário {usuarioEstaLogado ? "ESTÁ" : "NÃO ESTÁ"} logado.
//             </Text>
//             <Text>{usuario?.name}</Text>
//             <Text
//               style={{
//                 color: "#A65A49",
//                 fontSize: 25,
//                 fontWeight: "bold",
//                 marginBottom: 40,
//               }}
//             >
//               Logout
//             </Text>
//           </View>
//           <TouchableOpacity
//             style={{
//               height: 40,
//               width: 250,
//               backgroundColor: "#A65A49",
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 16,
//               marginBottom: 70,
//             }}
//             onPress={() => signOutProcess()}
//           >
//             <Text
//               style={{
//                 color: "#F2E2C4",
//                 fontSize: 25,
//                 fontWeight: "bold",
//               }}
//             >
//               Sair
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// }


import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../assets/Avatar/Avatar";
import COLORS from "../components/Colors/Colors";
import { AuthContext } from "../components/contexts/Authentication";

export default function SignOutScreen() {
  const { signOutProcess, usuarioEstaLogado, usuario } =
    useContext(AuthContext);
  const navigation = useNavigation();
  console.log(usuario);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Avatar width={110} height={110} />
        <Text style={styles.statusText}>
          O usuário {usuarioEstaLogado ? "ESTÁ" : "NÃO ESTÁ"} logado.
        </Text>
        <Text style={styles.userName}>{usuario?.name}</Text>
        <Text style={styles.logoutText}>Logout</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => signOutProcess()}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.sand,
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutText: {
    color: COLORS.caramel,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40,
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
});
