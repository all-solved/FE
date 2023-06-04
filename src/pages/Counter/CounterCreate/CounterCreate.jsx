import React from "react";
import CounterComponent from "components/CounterComponent/CounterComponent";
const CounterCreate = () => {
  return (
    <>
      <CounterComponent
        mainText="소통창구 생성"
        create={true}
      ></CounterComponent>
    </>
  );
};

export default CounterCreate;
