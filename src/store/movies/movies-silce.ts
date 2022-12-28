import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  moviesList: [],
  movies_Now_Playing: [],
  movies_Top_Rated: [],
  movies_Search: [],
  movies_Details: {},
  movies_Credits: [],
  video_Trailer: [],
  movies_Similar: [],
  movies_Popular: [],
  loading: true,
  querySearch: "batman",
  total_page: 1,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // getMovies: (state, action) => {},
    // getUpCommingSuccess: (state, action) => {
    //   console.log("action", action);
    //   const dataMovies = action.payload.data || [];
    //   return {
    //     ...state,
    //     moviesList: dataMovies,
    //   };
    // },
    // getMoviesNowPlaying: (state, action) => {},
    // getMoviesNowPlayingSuccess: (state, action) => {
    //   console.log("action", action);
    //   const dataMovies = action.payload.data || [];
    //   return {
    //     ...state,
    //     movies_Now_Playing: dataMovies,
    //   };
    // },
    // getMoviesTopRated: (state, action) => {},
    // getMoviesTopRatedSuccess: (state, action) => {
    //   console.log("action", action);
    //   const dataMovies = action.payload.data || [];
    //   return {
    //     ...state,
    //     movies_Top_Rated: dataMovies,
    //   };
    // },
    // setLoading: (state, action) => {
    //   const { payload } = action;
    //   return {
    //     ...state,
    //     loading: payload,
    //   };
    // },
    // getMoviesSearch: (state, action) => {},
    // getMoviesSearchSuccess: (state, action) => {
    //   const dataMovies = action.payload.data || [];
    //   return {
    //     ...state,
    //     movies_Search: dataMovies,
    //   };
    // },
    // setQuerySearch: (state, action) => {
    //   return {
    //     ...state,
    //     querySearch: action.payload.query,
    //   };
    // },
    // getMoviesDetails: (state, action) => {},
    // getMoviesDetailsSuccess: (state, action) => {
    //   const dataCredits = action.payload.data || [];
    //   return {
    //     ...state,
    //     movies_Details: dataCredits,
    //   };
    // },
    // getMoviesCredits: (state, action) => {},
    // getMoviesCreditsSuccess: (state, action) => {
    //   const { payload } = action;
    //   return {
    //     ...state,
    //     movies_Credits: payload.data,
    //   };
    // },
    // getMoviesTrailer: () => {},
    // getMoviesTrailerSuccess: (state, action) => {
    //   const { payload } = action;
    //   return {
    //     ...state,
    //     video_Trailer: payload.data,
    //   };
    // },
    // getMoviesSimilar: (state, action) => {},
    // getMoviesSimilarSuccess: (state, action) => {
    //   const { payload } = action;
    //   return {
    //     ...state,
    //     movies_Similar: payload.data,
    //   };
    // },
    getMoviesPopular: (state, actio: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    getMoviesPopularSuccess: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        movies_Popular: payload.data,
      };
    },
    // getTotalPage: (state, action) => {
    //   const { payload } = action;
    //   return {
    //     ...state,
    //     total_page: payload.totalPage,
    //   };
    // },
  },
});
export const {
  // setQuerySearch,
  // getMovies,
  // getUpCommingSuccess,
  // getMoviesNowPlaying,
  // getMoviesNowPlayingSuccess,
  // getMoviesTopRated,
  // getMoviesTopRatedSuccess,
  // getMoviesSearch,
  // getMoviesSearchSuccess,
  // setLoading,
  // getMoviesDetails,
  // getMoviesDetailsSuccess,
  // getMoviesCredits,
  // getMoviesCreditsSuccess,
  // getMoviesTrailer,
  // getMoviesTrailerSuccess,
  // getMoviesSimilar,
  // getMoviesSimilarSuccess,
  getMoviesPopular,
  getMoviesPopularSuccess,
  // getTotalPage,
} = moviesSlice.actions;
export default moviesSlice.reducer;
