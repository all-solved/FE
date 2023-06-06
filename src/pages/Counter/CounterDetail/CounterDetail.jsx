import React from "react";
import CounterComponent from "components/CounterComponent/CounterComponent";
import { CounteDetailWrapper } from "./CounterDetail.style";
import { CounterDetailData } from "pages/DummyData/CounterDetailDummy";
const CounterDetail = () => {
  return (
    <CounteDetailWrapper>
      <CounterComponent
        mainText="소통창구 상세"
        create={false}
        width="90rem"
        data={CounterDetailData}
      ></CounterComponent>
    </CounteDetailWrapper>
  );
};

export default CounterDetail;
