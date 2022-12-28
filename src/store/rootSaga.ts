import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/auth-saga";
import moviesSaga from "./movies/movies-saga";
export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(moviesSaga)]);
}
