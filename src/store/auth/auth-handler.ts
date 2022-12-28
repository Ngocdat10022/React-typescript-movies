import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  requestAuthRegister,
  requestAuthLogin,
  requestAuthGetme,
  requestAuthRefreshToken,
} from "./auth-request";
import "react-toastify/dist/ReactToastify.css";
// import { IAction } from "../../constant/interface";
import { PayloadAction } from "@reduxjs/toolkit";
import { saveToken } from "../../utils/auth";
import { authUpdateUser } from "./auth-slice";
import { IAction } from "../../constant/interface";
function* handleRequestAuthResgiter(action: PayloadAction<any>): any {
  try {
    const { payload } = action;
    console.log("payload", payload);
    const res = yield call(requestAuthRegister, payload);
    if (res.status === 201) {
      // alert("Register successFully");
      toast.success("Register Successfully", {
        position: "top-right",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleRequestAuthGetme(action: IAction): any {
  try {
    const { payload } = action;
    const res = yield call(requestAuthGetme, payload);
    console.log("res.data", res.data);
    console.log(res);
    if (res.status === 200) {
      yield put(
        authUpdateUser({
          user: res.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleRequestAuthLogin(action: PayloadAction<any>): any {
  try {
    const { payload } = action;
    const res = yield call(requestAuthLogin, payload);
    console.log("data", res);
    if (res.data.accessToken && res.data.refreshToken) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      toast.success("Login SuccessFully");
      yield call(handleRequestAuthGetme, {
        payload: res.data.accessToken,
      });
    }
  } catch (error: any) {
    console.log("error", error);
    if (error.response.status === 403) toast.error("Login Fail");
  }
}
function* handleRequestAuthRefreshToken(action: IAction): any {
  const { payload } = action;
  try {
    const res = yield call(requestAuthRefreshToken, payload);
    if (res.data) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield handleRequestAuthGetme({
        payload: res.data.accessToken,
      });
    }
  } catch (error) {}
}
// function* handleLogout() {
//   yield put(authUpdateUser({}));
//   logout();
// }
export {
  handleRequestAuthResgiter,
  handleRequestAuthLogin,
  handleRequestAuthGetme,
  handleRequestAuthRefreshToken,
  // handleLogout,
};
