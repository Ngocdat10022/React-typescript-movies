import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { theme } from "./assets/styles/theme";
import { store } from "./store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
