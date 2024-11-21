// import React, { useEffect, useState, useContext } from "react";
// import {
//   Button,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { api } from "../services/api";
// import { buscaLivroPorId } from "../services/api";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AuthContext } from "../components/contexts/Authentication";
// import LoadingAppScreen from "./LoadingAppScreen";
// import COLORS from "../components/Colors/Colors";

// import sanitizeHtml from "sanitize-html";

// export default function Book({ navigation: { goBack }, route }) {
//   const {
//     usuarioEstaLogado,
//     usuario,
//     Favoriter,
//     Unfavorater,
//     AddToCart,
//     RemoveFromCart,
//     showToastAndroid,
//   } = useContext(AuthContext);

//   const [livro, setLivro] = useState(null);
//   const [bookFav, setBookFav] = useState(false);
//   const [shoppingCart, setShoppingCart] = useState(false);
//   const book = route.params.idLivro;
//   const price = 5.99
//   const quantity = 1





//   const bookfavoriter = async () => {
//     try {
//       if (usuarioEstaLogado) {
//         const id = usuario._id;
//         const idLivro = route.params.idLivro;
//         const ttlLivro = livro.volumeInfo.title;
//         const imgLivro = livro.volumeInfo.imageLinks.thumbnail;

//         if (!bookFav) {
//           Favoriter(id, idLivro, imgLivro, ttlLivro);
//           setBookFav(true);
//         } else {
//           Unfavorater(id, idLivro);
//           setBookFav(false);
//         }
//       } else {
//         setBookFav(false);
//         showToastAndroid(`Por favor faça login`);
//       }
//     } catch (error) {}
//   };

//   const bookAdderToCart = async () => {
//     try {
//       if (usuarioEstaLogado) {
//         const id = usuario._id;
//         const idLivro = route.params.idLivro;
//         const ttlLivro = livro.volumeInfo.title;
//         const imgLivro = livro.volumeInfo.imageLinks.thumbnail;

//         if (!shoppingCart) {
//           AddToCart(id, idLivro, imgLivro, ttlLivro, price, quantity);
//           setShoppingCart(true);
//         } else {
//           RemoveFromCart(id, idLivro)
//           setShoppingCart(false);
//         }
//       } else {
//         setShoppingCart(false);
//         showToastAndroid(`Por favor faça login`);
//       }
//     } catch (error) {}
//   };

//   const getData = async () => {
//     try {
//       if (usuarioEstaLogado) {
//         const jsonValue = await AsyncStorage.getItem("@user");
//         const data = JSON.parse(jsonValue);
//         const books = data.books;
//         const sCart = data.shoppingCart;
//         let fav = books.some((boo) => boo.idLivro == book);
//         setBookFav(fav);
//         let cart = sCart.some((carty) => carty.idLivro == book);
//         setShoppingCart(cart);

//       }
//     } catch (e) {
//       // error reading value
//     }
//   };

//   BuscaLivro = async (idLivro) => {
//     const response = await buscaLivroPorId(idLivro);
//     setLivro(() => response.data);
//     getData();
//   };

//   useEffect(() => {
//     BuscaLivro(route.params.idLivro);
//   }, []);
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "flex-start",
//         alignItems: "center",
//         backgroundColor: "#F2E2C4",
//       }}
//     >
//       {livro ? (
//         <>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               margin: 10,
//               paddingBottom: 20,
//               backgroundColor: "#F2E2C4",
//             }}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Image
//                   style={{
//                     width: 240,
//                     height: 384,
//                     borderRadius: 10,
//                     // alignSelf: "center",
//                   }}
//                   source={{
//                     uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
//                   }}
//                 />
//               </View>
//               <View
//                 style={{
//                   position: "absolute",
//                   right: 5,
//                   top: 10,
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <TouchableOpacity
//                   style={{
//                     width: 48,
//                     height: 48,
//                     backgroundColor: "#D9B391",
//                     borderRadius: 50,
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                   onPress={() => bookfavoriter()}
//                 >
//                   {bookFav ? (
//                     <AntDesign name="heart" size={30} color="#A65A49" />
//                   ) : (
//                     <AntDesign name="hearto" size={30} color="#A65A49" />
//                   )}
//                 </TouchableOpacity>
//               </View>

//               <Text
//                 numberOfLines={2}
//                 style={{
//                   fontSize: 30,
//                   color: "#2B3640",
//                 }}
//               >
//                 {livro.volumeInfo.title}
//               </Text>

//               <View
//                 style={{
//                   height: 164,
//                 }}
//               >
//                 <ScrollView>
//                   <Text
//                     // numberOfLines={8}
//                     style={{
//                       fontSize: 16,
//                       color: "#2B3640",
//                     }}
//                   >
//                     {livro
//                       ? sanitizeHtml(livro.volumeInfo.description, {
//                           allowedTags: [],
//                         })
//                       : livro.volumeInfo.description}
//                   </Text>
//                 </ScrollView>
//               </View>
//             </View>

//             <View
//               style={{
//                 flex: 0.12,
//                 width: "100%",
//                 backgroundColor: "#D9B391",
//                 flexDirection: "row",
//                 justifyContent: "space-around",
//                 alignItems: "flex-start",
//                 borderTopRightRadius: 20,
//                 borderTopLeftRadius: 20,
//               }}
//             >
//               <TouchableOpacity
//                 style={{
//                   width: 40,
//                   height: 40,
//                   backgroundColor: "#D9B391",
//                   borderRadius: 50,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginTop: 8,
//                 }}
//                 onPress={() => bookAdderToCart()}
//               >
//                 {shoppingCart ? (
//                   <Ionicons name="cart-sharp" size={30} color="#2B3640" />
//                 ) : (
//                   <Ionicons name="cart-outline" size={30} color="#F2E2C4" />
//                 )}
//               </TouchableOpacity>

//               <View
//                 style={{
//                   width: 100,
//                   flexDirection: "row",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text>$</Text>
//                 <Text
//                   style={{
//                     fontSize: 40,
//                     fontWeight: "bold",
//                     color: "#2B3640",
//                     marginLeft: 10,
//                   }}
//                 >
//                   {price}
//                 </Text>
//               </View>
//               <TouchableOpacity
//                 style={{
//                   width: 100,
//                   height: 40,
//                   backgroundColor: "#A65A49",
//                   borderRadius: 50,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   // paddingTop: 10,
//                   marginTop: 8,
//                   // borderWidth: 2,
//                   // borderColor: "#A65A49",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontSize: 20,
//                     color: "#2d3741",
//                   }}
//                 >
//                   Comprar
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </>
//       ) : (
//         <LoadingAppScreen />
//       )}
//     </View>
//   );
// }




















import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { api } from "../services/api";
import { buscaLivroPorId } from "../services/api";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../components/contexts/Authentication";
import LoadingAppScreen from "./LoadingAppScreen";
import COLORS from "../components/Colors/Colors";

import sanitizeHtml from "sanitize-html";

export default function Book({ navigation: { goBack }, route }) {
  const {
    usuarioEstaLogado,
    usuario,
    Favoriter,
    Unfavorater,
    AddToCart,
    RemoveFromCart,
    showToastAndroid,
  } = useContext(AuthContext);

  const [livro, setLivro] = useState(null);
  const [bookFav, setBookFav] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);
  const book = route.params.idLivro;
  const price = 5.99;
  const quantity = 1;

  const bookfavoriter = async () => {
    try {
      if (usuarioEstaLogado) {
        const id = usuario._id;
        const idLivro = route.params.idLivro;
        const ttlLivro = livro.volumeInfo.title;
        const imgLivro = livro.volumeInfo.imageLinks.thumbnail;

        if (!bookFav) {
          Favoriter(id, idLivro, imgLivro, ttlLivro);
          setBookFav(true);
        } else {
          Unfavorater(id, idLivro);
          setBookFav(false);
        }
      } else {
        setBookFav(false);
        showToastAndroid(`Por favor faça login`);
      }
    } catch (error) {}
  };

  const bookAdderToCart = async () => {
    try {
      if (usuarioEstaLogado) {
        const id = usuario._id;
        const idLivro = route.params.idLivro;
        const ttlLivro = livro.volumeInfo.title;
        const imgLivro = livro.volumeInfo.imageLinks.thumbnail;

        if (!shoppingCart) {
          AddToCart(id, idLivro, imgLivro, ttlLivro, price, quantity);
          setShoppingCart(true);
        } else {
          RemoveFromCart(id, idLivro);
          setShoppingCart(false);
        }
      } else {
        setShoppingCart(false);
        showToastAndroid(`Por favor faça login`);
      }
    } catch (error) {}
  };

  const getData = async () => {
    try {
      if (usuarioEstaLogado) {
        const jsonValue = await AsyncStorage.getItem("@user");
        const data = JSON.parse(jsonValue);
        const books = data.books;
        const sCart = data.shoppingCart;
        let fav = books.some((boo) => boo.idLivro == book);
        setBookFav(fav);
        let cart = sCart.some((carty) => carty.idLivro == book);
        setShoppingCart(cart);
      }
    } catch (e) {
      // error reading value
    }
  };

  const BuscaLivro = async (idLivro) => {
    const response = await buscaLivroPorId(idLivro);
    setLivro(() => response.data);
    getData();
  };

  useEffect(() => {
    BuscaLivro(route.params.idLivro);
  }, []);

  return (
    <View style={styles.container}>
      {livro ? (
        <>
          {/*<View style={styles.mainView}> */}

          <View style={styles.bookContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.bookImage}
                source={{
                  uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
                }}
              />
            </View>
            <View style={styles.favoriteButtonContainer}>
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => bookfavoriter()}
              >
                {bookFav ? (
                  <AntDesign name="heart" size={30} color={COLORS.caramel} />
                ) : (
                  <AntDesign name="hearto" size={30} color={COLORS.caramel} />
                )}
              </TouchableOpacity>
            </View>

            <Text style={styles.bookTitle}>{livro.volumeInfo.title}</Text>

            <View style={styles.descriptionContainer}>
              <ScrollView>
                <Text style={styles.bookDescription}>
                  {livro
                    ? sanitizeHtml(livro.volumeInfo.description, {
                        allowedTags: [],
                      })
                    : livro.volumeInfo.description}
                </Text>
              </ScrollView>
            </View>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => bookAdderToCart()}
            >
              {shoppingCart ? (
                <Ionicons name="cart-sharp" size={30} color={COLORS.charcoal} />
              ) : (
                <Ionicons name="cart-outline" size={30} color={COLORS.ivory} />
              )}
            </TouchableOpacity>

            <View style={styles.priceContainer}>
              <Text>$</Text>
              <Text style={styles.price}>{price}</Text>
            </View>

            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
          {/* //           </View> */}

        </>
      ) : (
        <LoadingAppScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.charcoal,
  },
  bookContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    paddingBottom: 20,
    backgroundColor: COLORS.cream,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bookImage: {
    width: 240,
    height: 384,
    borderRadius: 10,
  },
  favoriteButtonContainer: {
    position: "absolute",
    right: 5,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteButton: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.sand,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bookTitle: {
    fontSize: 30,
    color: COLORS.charcoal,
  },
  descriptionContainer: {
    height: 164,
  },
  bookDescription: {
    fontSize: 16,
    color: COLORS.charcoal,
  },
  actionContainer: {
    flex: 0.12,
    width: "100%",
    backgroundColor: COLORS.sand,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cartButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.sand,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  priceContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.charcoal,
    marginLeft: 10,
  },
  buyButton: {
    width: 100,
    height: 40,
    backgroundColor: COLORS.caramel,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buyButtonText: {
    fontSize: 20,
    color: COLORS.ivory,
  },
});
















// import React, { useEffect, useState, useContext } from "react";
// import {
//   Button,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { api } from "../services/api";
// import { buscaLivroPorId } from "../services/api";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AuthContext } from "../components/contexts/Authentication";
// import LoadingAppScreen from "./LoadingAppScreen";
// import COLORS from "../components/Colors/Colors";

// import sanitizeHtml from "sanitize-html";

// export default function Book({ navigation: { goBack }, route }) {
//   const {
//     usuarioEstaLogado,
//     usuario,
//     Favoriter,
//     Unfavorater,
//     AddToCart,
//     RemoveFromCart,
//     showToastAndroid,
//   } = useContext(AuthContext);

//   const [livro, setLivro] = useState(null);
//   const [bookFav, setBookFav] = useState(false);
//   const [shoppingCart, setShoppingCart] = useState(false);
//   const book = route.params.idLivro;
//   const price = 5.99;
//   const quantity = 1;

//   const bookfavoriter = async () => {
//     try {
//       if (usuarioEstaLogado) {
//         const id = usuario._id;
//         const idLivro = route.params.idLivro;
//         const ttlLivro = livro.volumeInfo.title;
//         const imgLivro = livro.volumeInfo.imageLinks.thumbnail;

//         if (!bookFav) {
//           Favoriter(id, idLivro, imgLivro, ttlLivro);
//           setBookFav(true);
//         } else {
//           Unfavorater(id, idLivro);
//           setBookFav(false);
//         }
//       } else {
//         setBookFav(false);
//         showToastAndroid(`Por favor faça login`);
//       }
//     } catch (error) {}
//   };

//   const bookAdderToCart = async () => {
//     try {
//       if (usuarioEstaLogado) {
//         const id = usuario._id;
//         const idLivro = route.params.idLivro;
//         const ttlLivro = livro.volumeInfo.title;
//         const imgLivro = livro.volumeInfo.imageLinks.thumbnail;

//         if (!shoppingCart) {
//           AddToCart(id, idLivro, imgLivro, ttlLivro, price, quantity);
//           setShoppingCart(true);
//         } else {
//           RemoveFromCart(id, idLivro);
//           setShoppingCart(false);
//         }
//       } else {
//         setShoppingCart(false);
//         showToastAndroid(`Por favor faça login`);
//       }
//     } catch (error) {}
//   };

//   const getData = async () => {
//     try {
//       if (usuarioEstaLogado) {
//         const jsonValue = await AsyncStorage.getItem("@user");
//         const data = JSON.parse(jsonValue);
//         const books = data.books;
//         const sCart = data.shoppingCart;
//         let fav = books.some((boo) => boo.idLivro == book);
//         setBookFav(fav);
//         let cart = sCart.some((carty) => carty.idLivro == book);
//         setShoppingCart(cart);
//       }
//     } catch (e) {
//       // error reading value
//     }
//   };

//   const BuscaLivro = async (idLivro) => {
//     const response = await buscaLivroPorId(idLivro);
//     setLivro(() => response.data);
//     getData();
//   };

//   useEffect(() => {
//     BuscaLivro(route.params.idLivro);
//   }, []);

//   return (
//     <View style={styles.container}>
//       {livro ? (
//         <>
//           <View style={styles.mainView}>
//             <View style={styles.imageContainer}>
//               <Image
//                 style={styles.bookImage}
//                 source={{
//                   uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
//                 }}
//               />
//             </View>
//             <View style={styles.favButtonContainer}>
//               <TouchableOpacity
//                 style={styles.favButton}
//                 onPress={() => bookfavoriter()}
//               >
//                 {bookFav ? (
//                   <AntDesign name="heart" size={30} color={COLORS.caramel} />
//                 ) : (
//                   <AntDesign name="hearto" size={30} color={COLORS.caramel} />
//                 )}
//               </TouchableOpacity>
//             </View>

//             <Text numberOfLines={2} style={styles.bookTitle}>
//               {livro.volumeInfo.title}
//             </Text>

//             <View style={styles.descriptionContainer}>
//               <ScrollView>
//                 <Text style={styles.descriptionText}>
//                   {livro
//                     ? sanitizeHtml(livro.volumeInfo.description, {
//                         allowedTags: [],
//                       })
//                     : livro.volumeInfo.description}
//                 </Text>
//               </ScrollView>
//             </View>

//             <View style={styles.bottomBar}>
//               <TouchableOpacity
//                 style={styles.cartButton}
//                 onPress={() => bookAdderToCart()}
//               >
//                 {shoppingCart ? (
//                   <Ionicons
//                     name="cart-sharp"
//                     size={30}
//                     color={COLORS.charcoal}
//                   />
//                 ) : (
//                   <Ionicons
//                     name="cart-outline"
//                     size={30}
//                     color={COLORS.ivory}
//                   />
//                 )}
//               </TouchableOpacity>

//               <View style={styles.priceContainer}>
//                 <Text>$</Text>
//                 <Text style={styles.priceText}>{price}</Text>
//               </View>
//               <TouchableOpacity style={styles.buyButton}>
//                 <Text style={styles.buyButtonText}>Comprar</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </>
//       ) : (
//         <LoadingAppScreen />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: COLORS.cream,
//   },
//   mainView: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 10,
//     paddingBottom: 20,
//     backgroundColor: COLORS.cream,
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   bookImage: {
//     width: 240,
//     height: 384,
//     borderRadius: 10,
//   },
//   favButtonContainer: {
//     position: "absolute",
//     right: 5,
//     top: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   favButton: {
//     width: 48,
//     height: 48,
//     backgroundColor: COLORS.sand,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   bookTitle: {
//     fontSize: 30,
//     color: COLORS.charcoal,
//   },
//   descriptionContainer: {
//     height: 164,
//   },
//   descriptionText: {
//     fontSize: 16,
//     color: COLORS.charcoal,
//   },
//   bottomBar: {
//     flex: 0.12,
//     width: "100%",
//     backgroundColor: COLORS.sand,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "flex-start",
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//   },
//   cartButton: {
//     width: 40,
//     height: 40,
//     backgroundColor: COLORS.sand,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 8,
//   },
//   priceContainer: {
//     width: 100,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   priceText: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: COLORS.charcoal,
//     marginLeft: 10,
//   },
//   buyButton: {
//     width: 100,
//     height: 40,
//     backgroundColor: COLORS.caramel,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 8,
//   },
//   buyButtonText: {
//     fontSize: 20,
//     color: COLORS.ivory,
//   },
// });
