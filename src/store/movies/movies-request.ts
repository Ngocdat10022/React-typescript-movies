import axios from "axios";
import tmdbMovies from "../../constant/apiGetMovies";
export const requestMovies = ({
  type,
  page = 1,
}: {
  type: string;
  page: number;
}) => {
  return axios.get(tmdbMovies.getMoviesList(type, page));
};
// export const requestSearchMovies = ({ query = "spiderman", page }) => {
//   console.log("query", query);
//   console.log("page", page);
//   return axios.get(tmdbMovies.getMoviesSearch(query, page));
// };
// export const requestMoviesDetails = (id) => {
//   console.log("id", id);
//   return axios.get(tmdbMovies.getMoviesDetail(id));
// };
// export const requestMoviesCredits = ({ type, id }) => {
//   console.log("id", id);
//   return axios.get(tmdbMovies.getMoviesMeta(id, type));
// };
// export const requestMoviesTrailer = ({ type, id }) => {
//   return axios.get(tmdbMovies.getMoviesMeta(id, type));
// };
// export const requestMoviesSimilar = ({ type, id }) => {
//   return axios.get(tmdbMovies.getMoviesMeta(id, type));
// };
