import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

<<<<<<< HEAD
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Router from "./Router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router></Router>
  </ThemeProvider>,
);
=======
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 5e04af34b6bcfec4c90a1254ea7620ca9b963acb
