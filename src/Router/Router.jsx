import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

import PageLayout from "../pages/PageLayout/PageLayout";
import AuthLogin from "../pages/Login/AuthLogin";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Counter from "../pages/Counter/CounterSelect/Counter";
import Main from "../pages/Main/Main";
import Problem from "pages/Problem/Problem";
import ProblemDetail from "pages/ProblemDetail/ProblemDetail";
import CounterCreate from "pages/Counter/CounterCreate/CounterCreate";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/allso/login" element={<Login />}></Route>
        <Route
          path="/allso/auth/kakao_login"
          element={<AuthLogin></AuthLogin>}
        ></Route>
        <Route element={<PrivateRoute />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/allso/problem" element={<Problem></Problem>}>
              <Route
                path="/allso/problem/detail/:id"
                element={<ProblemDetail></ProblemDetail>}
              ></Route>
            </Route>

            <Route path="/allso/counter" element={<Counter />}></Route>
            <Route
              path="/allso/counter_create"
              element={<CounterCreate></CounterCreate>}
            ></Route>
            <Route
              path="/allso/counter/detail/:id"
              element={<div>소통창구 상세 준비중입니다.</div>}
            ></Route>
          </Route>
          {/* </Route> */}
        </Route>
        <Route path="*" element={<div>Error page</div>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
