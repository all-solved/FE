import React from "react";
import styled from "styled-components";
import Header from "../../containers/Header/Header";

const CounterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px 30px;
  margin-left: 250px;
  background-color: #eeeff7;
`;

const Counter = () => {
  return (
    <>
      <Header title="소통창구 조회" />
      <CounterBox />
    </>
  );
};

export default Counter;
