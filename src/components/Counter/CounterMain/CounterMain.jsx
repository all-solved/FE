import React from "react";
import {
  CounterMainWrapper,
  TitleDateWrapper,
  ContactWrapper,
  CircleInput,
  ContentsTextarea,
} from "./CounterMain.style";
const CounterMain = ({ title, counterDate, pn, email, contents }) => {
  return (
    <CounterMainWrapper>
      <TitleDateWrapper>
        <CircleInput width="70"></CircleInput>
        <CircleInput width="20"></CircleInput>
      </TitleDateWrapper>
      <ContactWrapper>
        <CircleInput></CircleInput>
        <CircleInput></CircleInput>
      </ContactWrapper>

      <ContentsTextarea></ContentsTextarea>
    </CounterMainWrapper>
  );
};

export default CounterMain;
