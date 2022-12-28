import Router from "./routes/Router";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice";
import { getToken, logout } from "./utils/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const { user } = useSelector((state: { auth: any }) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   navigate("/login");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  // useEffect(() => {
  //   if (user || user?.email) {
  //     const { access_token } = getToken();
  //     if (access_token) {
  //       dispatch(
  //         authUpdateUser({
  //           user: user,
  //           access_token: access_token,
  //         })
  //       );
  //     }
  //   } else {
  //     const { refresh_token } = getToken();
  //     if (refresh_token) {
  //       dispatch(authRefreshToken(refresh_token));
  //     } else {
  //       dispatch(authUpdateUser({}));
  //     }
  //   }
  // });
  return (
    <div className="App">
      <Router />
    </div>
  );
}
export default App;
