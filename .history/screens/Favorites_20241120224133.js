// import React, { useContext } from "react";
// import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
// import { AuthContext } from "../components/contexts/Authentication";
// import { useNavigation } from "@react-navigation/native";

// const Favorites = () => {
//   const {usuarioEstaLogado, usuario } =
//     useContext(AuthContext);
//   const navigation = useNavigation();
//   const LivrosFavoritos = usuario?.books;

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         // justifyContent: "flex-start",
//         justifyContent: "center",
//         backgroundColor: "#F2E2C4",
//       }}
//     >
//       {usuarioEstaLogado ? (
//         <View
//           style={{
//             flex: 0.88,
//             width: "100%",
//             overflow: "hidden",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <ScrollView>
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 justifyContent: "center",
//               }}
//             >
//               {LivrosFavoritos?.map((livro) => (
//                 <View key={livro.idLivro}>
//                   {livro.imgLivro ? (
//                     <TouchableOpacity
//                       key={livro.idLivro}
//                       style={{
//                         borderWidth: 1,
//                         borderColor: "#f5efe1",
//                         borderRadius: 10,
//                         overflow: "hidden",
//                         margin: 8,
//                       }}
//                       onPress={() => {
//                         navigation.navigate("HomeStackRoutes", {
//                           screen: "Book",
//                           params: {
//                             idLivro: livro.idLivro,
//                           },
//                         });
//                       }}
//                     >
//                       <Image
//                         style={{
//                           width: 80,
//                           height: 128,
//                         }}
//                         source={{
//                           uri: `${livro.imgLivro}`,
//                         }}
//                       />
//                     </TouchableOpacity>
//                   ) : null}
//                 </View>
//               ))}
//             </View>
//           </ScrollView>
//         </View>
//       ) : (
//         <Text
//           style={{
//             alignSelf: "center",
//           }}
//         >
//           Por favor faça login
//         </Text>
//       )}
//     </View>
//   );
// };

// export default Favorites;

import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { AuthContext } from "../components/contexts/Authentication";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../components/Colors/Colors";

const Favorites = () => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);
  const navigation = useNavigation();
  const LivrosFavoritos = usuario?.books;

  return (
    <View style={styles.container}>
      {usuarioEstaLogado ? (
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.booksContainer}>
              {LivrosFavoritos?.map((livro) => (
                <View key={livro.idLivro}>
                  {livro.imgLivro && (
                    <TouchableOpacity
                      style={styles.bookItem}
                      onPress={() => {
                        navigation.navigate("HomeStackRoutes", {
                          screen: "Book",
                          params: {
                            idLivro: livro.idLivro,
                          },
                        });
                      }}
                    >
                      <Image
                        style={styles.bookImage}
                        source={{ uri: livro.imgLivro }}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <Text style={styles.loginPrompt}>Por favor faça login</Text>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.cream,
  },
  scrollContainer: {
    flex: 0.88,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  booksContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bookItem: {
    borderWidth: 1,
    borderColor: COLORS.ivory,
    borderRadius: 10,
    overflow: "hidden",
    margin: 8,
  },
  bookImage: {
    width: 80,
    height: 128,
  },
  loginPrompt: {
    alignSelf: "center",
    color: COLORS.charcoal,
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default Favorites;
