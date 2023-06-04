import React from "react";
import CounterComponent from "components/CounterComponent/CounterComponent";
import { CounteDetailWrapper } from "./CounterDetail.style";

const CounterDetail = () => {
  return (
    <>
      <CounterComponent
        mainText="소통창구 조회"
        create={false}
        rule={10}
      ></CounterComponent>
    </>
  );
};

export default CounterDetail;
