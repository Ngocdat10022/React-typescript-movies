const apiKey = "8e19a56f97d894caff6e9e6002a72854";
const tmdbEndPoint = "https://api.themoviedb.org/3/movie";
const tmdnEndPointSearch = "https://api.themoviedb.org/3/search/movie";

const tmdbMovies = {
  getMoviesList: (type: string, page = 1) => {
    return `${tmdbEndPoint}/${type}?api_key=${apiKey}&language=en-US&page=${page}`;
  },
  getMoviesSearch: (query: string, page: number) => {
    return `${tmdnEndPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`;
  },
  getMoviesDetail: (moviesId: number) => {
    return ` ${tmdbEndPoint}/${moviesId}}?api_key=${apiKey}&language=en-US;`;
  },
  getMoviesMeta: (moviesId: number, type: string) => {
    return `${tmdbEndPoint}/${moviesId}/${type}?api_key=${apiKey}&language=en-US`;
  },
  Image500: (url: string) => `https://image.tmdb.org/t/p/w500${url}`,
};
export default tmdbMovies;
