import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { IAction } from "../../constant/interface";
import {
  requestMovies,
  // requestMoviesCredits,
  // requestMoviesDetails,
  // requestMoviesSimilar,
  // requestMoviesTrailer,
  // requestSearchMovies,
} from "./movies-request";
import {
  // getUpCommingSuccess,
  // getMoviesNowPlayingSuccess,
  // getMoviesTopRatedSuccess,
  // getMoviesSearchSuccess,
  // setLoading,
  // getMoviesCreditsSuccess,
  // getMoviesDetailsSuccess,
  // getMoviesTrailerSuccess,
  // getMoviesSimilarSuccess,
  getMoviesPopularSuccess,
  // getTotalPage,
} from "./movies-silce";
// const sleep = (time: number) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// };
// function* handleGetMoviesUpComing(action) {
//   const { payload } = action;
//   console.log(payload.type);
//   const res = yield call(requestMovies, { type: payload.type });
//   const data = res.data.results;
//   yield put(getUpCommingSuccess({ data: data }));
// }
// function* handleGetMoviesNowPlaying(action) {
//   const payload = action.payload;
//   console.log(payload.type);
//   const res = yield call(requestMovies, {
//     type: payload.type,
//     page: payload.page,
//   });
//   yield put(setLoading(true));
//   const data = res.data.results;
//   const totalPage = res.data.total_pages;
//   yield sleep(2000);
//   if (!!data) {
//     yield put(getMoviesNowPlayingSuccess({ data: data }));
//     yield put(getTotalPage({ totalPage: totalPage }));
//     yield put(setLoading(false));
//   }
// }
// function* handleGetMoviesTopRated(action) {
//   const { payload } = action;
//   console.log(payload.type);
//   const res = yield call(requestMovies, { type: payload.type });
//   const data = res.data.results;
//   yield put(getMoviesTopRatedSuccess({ data: data }));
// }
function* handleGetMoviesPopular(action: PayloadAction<any>): any {
  const { payload } = action;
  console.log(payload.type);
  const res = yield call(requestMovies, { type: payload.type, page: 1 });
  const data = res.data.results;
  if (data) yield put(getMoviesPopularSuccess({ data: data }));
}
// function* handleSearchMovies(action) {
//   const { query, page } = action.payload;
//   const res = yield call(requestSearchMovies, { query: query, page: page });
//   console.log("responed", res);
//   yield put(setLoading(true));
//   const totalPage = res.data.total_pages;
//   const data = res.data.results;
//   yield sleep(2000);
//   if (!!data) {
//     yield put(getMoviesSearchSuccess({ data: data }));
//     yield put(getTotalPage({ totalPage: totalPage }));
//   }
//   yield put(setLoading(false));
// }
// function* handleGetMoviesDetails(action) {
//   const { payload } = action;
//   const res = yield call(requestMoviesDetails, payload.id);
//   const data = res.data;
//   if (!!data) yield put(getMoviesDetailsSuccess({ data: data }));
// }
// function* handleGetMoviesCredits(action) {
//   const { payload } = action;
//   const res = yield call(requestMoviesCredits, {
//     type: payload.type,
//     id: payload.id,
//   });
//   const dataCredits = res.data.cast;
//   yield put(getMoviesCreditsSuccess({ data: dataCredits }));
// }

// function* handleGetMoviesTrailer(action) {
//   const { payload } = action;
//   const res = yield call(requestMoviesTrailer, {
//     type: payload.type,
//     id: payload.id,
//   });
//   const dataTrailer = res.data.results;
//   yield put(getMoviesTrailerSuccess({ data: dataTrailer }));
// }
// function* handleGetMoviesSimilar(action) {
//   const { payload } = action;
//   const res = yield call(requestMoviesSimilar, {
//     type: payload.type,
//     id: payload.id,
//   });
//   console.log(res);
//   const dataSimilar = res.data.results;
//   yield put(getMoviesSimilarSuccess({ data: dataSimilar }));
// }
export {
  // handleGetMoviesUpComing,
  // handleGetMoviesNowPlaying,
  // handleGetMoviesTopRated,
  // handleSearchMovies,
  // handleGetMoviesDetails,
  // handleGetMoviesCredits,
  // handleGetMoviesTrailer,
  // handleGetMoviesSimilar,
  handleGetMoviesPopular,
};
