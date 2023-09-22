import axios from "axios";

export const api = axios.create({
  baseURL: "https://projeto-biblioteca-react-server-3-1.vercel.app",
});

export const googleApi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes"
})

  const myKey = "&key=AIzaSyD0IpRB2DoQ2v82pvzOtl9S6T92xJsytV4";


export const buscaLivroPorId = async (idLivro) => {
  console.log(idLivro);
  return googleApi.get(
    `/${idLivro}?&key=AIzaSyD0IpRB2DoQ2v82pvzOtl9S6T92xJsytV4`
  );
};


// export const api = axios.create({
//   baseURL: "http://localhost:5000",
// });

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};
