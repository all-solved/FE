import React, { useState } from "react";
import * as C from "./Counter.style.jsx";
import Title from "components/Title/Title";
import { ReactComponent as Filter } from "assets/images/svg/Filter.svg";
import { columns, data } from "../../DummyData/TableData.jsx";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const options = [
  { label: "시설", value: "시설" },
  { label: "서비스", value: "서비스" },
  { label: "행정", value: "행정" },
  { label: "기타", value: "기타" },
];

const Counter = () => {
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

            <C.SelectDiv>
              {/* <Filter /> */}
              {/* <C.SelectText marginLeft="5px">Filter</C.SelectText>
              <C.SpaceFilter direction="vertical">
                <C.SelectFilter
                  mode="multiple"
                  allowClear
                  placeholder="Please select"
                  onChange={handleChange}
                  options={options}
                ></C.SelectFilter>
              </C.SpaceFilter> */}
            </C.SelectDiv>
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
                onChange={handleChange}
                options={[
                  { value: "new", label: "최근 생성순" },
                  { value: "notSolve", label: "미해결 처리순" },
                ]}
              ></C.SelectBox>
            </C.SelectDiv>
            <C.CounterBtn type="primary">소통창구 생성</C.CounterBtn>
          </C.SelectDiv>
          <C.CounterTable columns={columns} dataSource={data}></C.CounterTable>
        </C.CounterDiv>
      </C.CounterBox>
    </>
  );
};

export default Counter;
