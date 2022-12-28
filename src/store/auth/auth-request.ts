const { default: axios } = require("../../axios/axios");
export const requestAuthRegister = (data: any) => {
  console.log("data", data);
  return axios.post("/auth/register", { ...data });
};
export const requestAuthLogin = (data: any) => {
  console.log("data", data);

  return axios.post("/auth/login", { ...data });
};
export const requestAuthGetme = (token: string) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
export const requestAuthRefreshToken = (token: string) => {
  console.log(token);
  if (!token) return;
  return axios.post("/token", {
    "Content-type": "Application/json",
    refreshToken: token,
  });
};
