import { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Favorites from "../../screens/Favorites";
import Romance from "../../screens/Romance";
import Ficcao from "../../screens/Ficcao";
import Fantasia from "../../screens/Fantasia";
import BestSellers from "../../screens/BestSellers";
import { useNavigation } from "@react-navigation/native";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabRoutes() {
      const navigation = useNavigation();



  const [resultadosLivrosRomance, setResultadosLivrosRomance] = useState();
  const nomeDeAutorFiccao = "alienista";
  const nomeDaObraRomance = "a megera";



//     fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=${nomeDeAutorFiccao}&maxResults=10`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((resp) => resp.json())
//       .then((data) => setResultadosLivrosFiccao(() => data.items))
//       .then(console.log("fetch ficcao"));

//     fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraRomance}&maxResults=10`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((resp) => resp.json())
//       .then((data) => setResultadosLivrosRomance(() => data.items))
//       .then(console.log("fetch romance"));
//   }, []);

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
        // tabBarItemStyle: { width: 200 },
        tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <TopTab.Screen name="Best-Sellers" component={BestSellers} />
      <TopTab.Screen name="Fantasia" component={Fantasia} />
      <TopTab.Screen name="Ficção" component={Ficcao} />
      <TopTab.Screen name="Romance" component={Romance} />
    </TopTab.Navigator>
  );
}
