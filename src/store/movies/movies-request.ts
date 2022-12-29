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
export const requestSearchMovies = ({
  query = "spiderman",
  page,
}: {
  query: string;
  page: number;
}) => {
  console.log("query", query);
  console.log("page", page);
  return axios.get(tmdbMovies.getMoviesSearch(query, page));
};

export const requestMoviesDetails = (id: number) => {
  console.log("id", id);
  return axios.get(tmdbMovies.getMoviesDetail(id));
};

export const requestMoviesCredits = ({
  type,
  id,
}: {
  type: string;
  id: number;
}) => {
  console.log("id", id);
  return axios.get(tmdbMovies.getMoviesMeta(id, type));
};
export const requestMoviesTrailer = ({
  type,
  id,
}: {
  type: string;
  id: number;
}) => {
  return axios.get(tmdbMovies.getMoviesMeta(id, type));
};
export const requestMoviesSimilar = ({
  type,
  id,
}: {
  type: string;
  id: number;
}) => {
  return axios.get(tmdbMovies.getMoviesMeta(id, type));
};
