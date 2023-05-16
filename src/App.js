
import Login from "./pages/Login/Login";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import Counter from "./pages/Counter/CounterSelect/Counter";
import CounterDetail from "./pages/Counter/CounterDetail/CounterDetail";
import Header from "./containers/Header/Header";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Login></Login>
=======
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/counter_detail" element={<CounterDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    
>>>>>>> 2f419b902367b74ad2e0200f681ea66ca85f7bf8
    </div>
  );
}

export default App;
