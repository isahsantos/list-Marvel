import axios from "axios";

const apiKey = "a621412979e3c905ee7b86a392a190eb";
const urlBase = "https://gateway.marvel.com:443/";

export async function obterHerois({ page, pageSize }) {
  const url =
    urlBase +
    `v1/public/characters?apikey=${apiKey}&limit=${pageSize}&offset=${
      (page - 1) * pageSize
    }`;

  const response = await axios.get(url);

  const count = response.data.data.total;
  const results = response.data.data.results;

  return {
    quantidade: count,
    resultados: results,
  };
}
