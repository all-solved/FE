import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLogin from "../pages/Login/AuthLogin";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Counter from "../pages/Counter/CounterSelect/Counter";
import Main from "../pages/Main/Main";
import PageLayout from "../components/PageLayout/PageLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/allso/login" element={<Login />}></Route>
        <Route
          path="/allso/auth/kakao_login"
          element={<AuthLogin></AuthLogin>}
        ></Route>
      </Routes>

      <PageLayout>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/allso/problem" element={<div>컴플레인 전체보기</div>}>
              <Route
                path="/allso/problem/detail:id"
                element={<div>컴플레인 상세보기</div>}
              ></Route>
            </Route>
          </Route>
          <Route path="/allso/counter" element={<Counter />}></Route>

          {/* </Route> */}
          <Route path="/*" element={<div>Error page</div>}></Route>
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default Router;
