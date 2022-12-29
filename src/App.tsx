import Router from "./routes/Router";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice";
import { getToken } from "./utils/auth";
import { useEffect } from "react";
import { IState } from "./constant/interface";
function App() {
  const { user } = useSelector((state: IState) => state.auth);
  const dispatch = useDispatch();
  console.log("user", user);

  useEffect(() => {
    if (user?.email) {
      const { access_token } = getToken();
      if (access_token) {
        dispatch(
          authUpdateUser({
            user: user,
            access_token: access_token,
          })
        );
      }
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        console.log("RUN refresh token");
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(
          authUpdateUser({
            user: user,
            access_token: null,
          })
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="App">
      <Router />
    </div>
  );
}
export default App;
