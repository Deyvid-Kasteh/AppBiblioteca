import { View, Text } from 'react-native'
import React from 'react'

export default function Fantasia() {
  const nomeDoLivroFantasia = "o castelo animado";
  const [resultadosLivrosFantasia, setResultadosLivrosFantasia] = useState();


useEffect(() => {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraBestSellers}&maxResults=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((resp) => resp.json())
    .then((data) => setResultadosLivrosBestSellers(() => data.items))
    .then(console.log("fetch Best Sellers"));
}, []);





  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${nomeDoLivroFantasia}&maxResults=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((resp) => resp.json())
    .then((data) => setResultadosLivrosFantasia(() => data.items))
    .then(console.log(resultadosLivrosFantasia));






  return (
    <View>
      <Text>Fantasia</Text>
      {resultadosLivrosBestSellers ? (
        <View
          style={{
            flex: 0.75,
            width: "100%",
            // backgroundColor: "green",
            marginTop: 30,
          }}
        >
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {resultadosLivrosBestSellers?.map((livro) => (
                <View key={livro.id}>
                  {livro.volumeInfo.imageLinks ? (
                    <TouchableOpacity
                      key={livro.id}
                      style={{
                        borderWidth: 1,
                        borderColor: "#f5efe1",
                        borderRadius: 10,
                        overflow: "hidden",
                        margin: 8,
                      }}
                      onPress={() => {
                        navigation.navigate("HomeStackRoutes", {
                          screen: "Book",
                          params: {
                            name: `${livro.volumeInfo.title}`,
                            description: `${livro.volumeInfo.description}`,
                            image: `${livro.volumeInfo.imageLinks.thumbnail}`,
                          },
                          // initial: false,
                        });
                      }}
                    >
                      <Image
                        style={{
                          width: 80,
                          height: 128,
                        }}
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
        <Text>BestSellers Não tem livros</Text>
      )}
    </View>
  );
}