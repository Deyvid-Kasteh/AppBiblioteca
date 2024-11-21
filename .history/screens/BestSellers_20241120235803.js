// import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
// import React, { useEffect, useState } from "react";

// export default function BestSellers({ navigation }) {
//   const nomeDaObraBestSellers = "best sellers";
//   const [resultadosLivrosBestSellers, setResultadosLivrosBestSellers] =
//     useState();
//   const myKey = "&key=AIzaSyD0IpRB2DoQ2v82pvzOtl9S6T92xJsytV4";

//   useEffect(() => {
//     fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraBestSellers}&maxResults=40${myKey}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((resp) => resp.json())
//       .then((data) => setResultadosLivrosBestSellers(() => data.items))
//       .then(console.log("fetch Best Sellers"));
//   }, []);

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "flex-start",
//         backgroundColor: "#F2E2C4",
//       }}
//     >
//       {resultadosLivrosBestSellers ? (
//         <View
//           style={{
//             flex: 0.88,
//             width: "100%",
//             overflow: "hidden",
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
//               {resultadosLivrosBestSellers?.map((livro) => (
//                 <View key={livro.id}>
//                   {livro.volumeInfo.imageLinks ? (
//                     <TouchableOpacity
//                       key={livro.id}
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
//                             idLivro: livro.id,
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
//                           uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
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
//         <Text>BestSellers Não tem livros</Text>
//       )}
//     </View>
//   );
// }



import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import

export default function BestSellers({ navigation }) {
  const nomeDaObraBestSellers = "best sellers";
  const [resultadosLivrosBestSellers, setResultadosLivrosBestSellers] =
    useState();
  const myKey = "&key=AIzaSyD0IpRB2DoQ2v82pvzOtl9S6T92xJsytV4";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraBestSellers}&maxResults=40${myKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosBestSellers(() => data.items))
      .then(() => console.log("fetch Best Sellers"));
  }, []);

  return (
    <View style={styles.container}>
      {resultadosLivrosBestSellers ? (
        <View style={styles.resultsContainer}>
          <ScrollView>
            <View style={styles.booksWrapper}>
              {resultadosLivrosBestSellers?.map((livro) => (
                <View key={livro.id}>
                  {livro.volumeInfo.imageLinks ? (
                    <TouchableOpacity
                      key={livro.id}
                      style={styles.bookItem}
                      onPress={() => {
                        navigation.navigate("HomeStackRoutes", {
                          screen: "Book",
                          params: {
                            idLivro: livro.id,
                          },
                        });
                      }}
                    >
                      <Image
                        style={styles.bookImage}
                        source={{
                          uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
                        }}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <Text style={styles.noBooksText}>BestSellers Não tem livros</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.cream, // Usando a cor cream de COLORS
  },
  resultsContainer: {
    flex: 0.88,
    width: "100%",
    overflow: "hidden",
  },
  booksWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bookItem: {
    borderWidth: 1,
    borderColor: COLORS.ivory, // Usando a cor ivory de COLORS
    borderRadius: 10,
    overflow: "hidden",
    margin: 8,
  },
  bookImage: {
    width: 80,
    height: 128,
  },
  noBooksText: {
    fontSize: 18,
    color: COLORS.charcoal, // Usando a cor charcoal de COLORS
    textAlign: "center",
    marginTop: 20,
  },
});

