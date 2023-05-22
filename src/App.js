import Login from "./pages/Login/Login";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router></Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
