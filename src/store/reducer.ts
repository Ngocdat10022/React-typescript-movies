import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import moviesReducer from "./movies/movies-silce";
const reducer = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});
export default reducer;
