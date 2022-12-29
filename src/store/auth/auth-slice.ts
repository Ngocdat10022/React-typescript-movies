import { createSlice } from "@reduxjs/toolkit";
import { IStateAuth } from "../../constant/interface";

const initialState: IStateAuth = {
  user: {
    email: "",
    id: 0,
    name: "",
    password: "",
    refreshToken: "",
  },
  accessToken: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authResgiter: (state, action) => {
      console.log("action", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
    authLogin: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    authUpdateUser: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    },
    authGetMe: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    authRefreshToken: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    authLogout: (state, action) => {},
  },
});
export const {
  authResgiter,
  authLogin,
  authUpdateUser,
  authGetMe,
  authRefreshToken,
  authLogout,
} = authSlice.actions;
export default authSlice.reducer;
