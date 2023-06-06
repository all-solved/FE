import React, { useState } from "react";
import * as C from "./Counter.style.jsx";
import Title from "components/Title/Title";
import { ReactComponent as Filter } from "assets/images/svg/Filter.svg";
import { columns, data } from "../../DummyData/TableData.jsx";

import { useNavigate } from "react-router-dom";

const Counter = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Header title="소통창구 조회" /> */}

      <C.CounterBox>
        {/* <C.CounterTitle>소통창구 조회하기</C.CounterTitle>
        <C.CounterSubtitle>
          내가 생성한 소통창구를 확인하세요.
        </C.CounterSubtitle> */}
        <Title mainText="소통창구 목록"></Title>
        <C.CounterDiv>
          <C.SelectDiv justify="space-between">
            <C.SearchBox enterButton placeholder="Search"></C.SearchBox>
          </C.SelectDiv>

          <C.SelectDiv
            marginTop="30px"
            marginBottom="20px"
            justify="space-between"
          >
            <C.SelectDiv>
              <C.SelectText>Sort by</C.SelectText>
              <C.SelectBox
                defaultValue="new"
                options={[
                  { value: "new", label: "최근 생성순" },
                  { value: "notSolve", label: "미해결 처리순" },
                ]}
              ></C.SelectBox>
            </C.SelectDiv>
            <C.CounterBtn
              type="primary"
              onClick={() => navigate("/allso/counter_create")}
            >
              소통창구 생성
            </C.CounterBtn>
          </C.SelectDiv>
          <C.CounterTable
            columns={columns}
            dataSource={data}
            onRow={(record, rowIndex) => {
              return {
                onClick: (e) => {
                  console.log(record);
                  console.log(rowIndex);
                  navigate(`/allso/counter/detail/${record.counterNum}`);
                },
              };
            }}
          ></C.CounterTable>
        </C.CounterDiv>
      </C.CounterBox>
    </>
  );
};

export default Counter;
