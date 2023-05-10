import React from "react";
import * as C from "./Counter.style.jsx";
import Header from "../../containers/Header/Header";

const Counter = () => {
  return (
    <>
      <Header title="소통창구 조회" />
      <C.CounterBox />
    </>
  );
};

export default Counter;
