import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../components/Colors/Colors";
import Carousel from "react-native-snap-carousel";

export default function Romance({ navigation }) {
  const nomeDaObraRomance = "subject:novel";
  const [resultadosLivrosRomance, setResultadosLivrosRomance] = useState([]);
  const myKey = "&key=AIzaSyD0IpRB2DoQ2v82pvzOtl9S6T92xJsytV4";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraRomance}&maxResults=10${myKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        setResultadosLivrosRomance(data.items || []);
      })
      // .then((data) => setResultadosLivrosRomance(() => data.items))
      // .then(() => console.log(resultadosLivrosRomance[0]));
  }, []);

  // function renderItem({ item, index }) {
  //   <View style={styles.resultsContainer1}>
  //     {console.log(item.id)}
  //     <Text style={styles.resultsContainer2}>{item.id}</Text>
  //     <Image style={styles.resultsContainer3}></Image>
  //   </View>;
  // }

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.resultsContainer1}>
        <Text style={styles.title}>{item.id}</Text>
        <Image source={{uri}}/>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {resultadosLivrosRomance ? (
        <>
          <Carousel
            data={resultadosLivrosRomance}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
          />
        </>
      ) : (
        // <View style={styles.resultsContainer}>
        //   <ScrollView>
        //     <View style={styles.booksWrapper}>
        //       {resultadosLivrosRomance?.map((livro) => (
        //         <View key={livro.id}>
        //           {livro.volumeInfo.imageLinks ? (
        //             <TouchableOpacity
        //               key={livro.id}
        //               style={styles.bookItem}
        //               onPress={() => {
        //                 navigation.navigate("HomeStackRoutes", {
        //                   screen: "Book",
        //                   params: {
        //                     idLivro: livro.id,
        //                   },
        //                 });
        //               }}
        //             >
        //               <Image
        //                 style={styles.bookImage}
        //                 source={{
        //                   uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
        //                 }}
        //               />
        //             </TouchableOpacity>
        //           ) : null}
        //         </View>
        //       ))}
        //     </View>
        //   </ScrollView>
        // </View>
        <Text style={styles.noBooksText}>Romance Não tem livros</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.cream,
  },
  resultsContainer: {
    flex: 0.88,
    width: "100%",
    overflow: "hidden",
  },
  resultsContainer1: {
    width: 300,
    height: 300,
    backgroundColor: COLORS.charcoal,
  },
  resultsContainer2: {},
  resultsContainer3: {},

  booksWrapper: {
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
  noBooksText: {
    fontSize: 18,
    color: COLORS.charcoal,
    textAlign: "center",
    marginTop: 20,
  },
});
