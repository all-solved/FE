import React from "react";
import CustomCheckbox from "components/CounterComponent/Check";

import propTypes from "prop-types";
import {
  CounteDetailWrapper,
  CounterDiv1,
  TitleContainer,
  MiddleContainer,
  DivWrapper,
  TitleText,
  TitleInput,
  SubText,
  PeriodWrapper,
  PeriodRadio,
  PeriodLabel,
  ContentContainer,
  ContentTextArea,
  ContentWrapper,
  TermWrapper,
  TermText,
  ButtonWrapper,
  CreateBtn,
  ExtendBtn,
  DeleteBtn,
  QRcodeWrapper,
  CounterWrapper,
  QRcodeMessage,
} from "./CounterDetail.style";
import Title from "components/Title/Title";
import { COMPLAINT_TERMS } from "constants/CounterCreateTerms";
import QRcode from "react-qr-code";
import { CounterDetailData } from "pages/DummyData/CounterDetailDummy";
import { useDateRadio } from "hooks/useDateRadio";
import { useNavigate } from "react-router-dom";

const CounterDetail = () => {
  const navigate = useNavigate();
  const {
    title,
    counterPeriod,
    contactNumber,
    contactEmail,
    contents,
    QRcodeUrl,
  } = CounterDetailData || {};

  const handlePeriod = () => {
    alert("창구연장 서비스 준비중입니다");
  };

  const handleDelete = () => {
    if (window.confirm("소통창구를 삭제하시겠습니까?")) {
      //함수 추가
      alert("소통창구가 삭제되었습니다");
      navigate("/allso/counter");
    }
  };

  const handleEdit = () => {};
  return (
    <CounteDetailWrapper>
      <Title mainText="가톨릭대 시설보수 소통창구"></Title>
      <CounterWrapper>
        <CounterDiv1 width="85rem">
          <DivWrapper>
            <TitleContainer>
              <TitleText>TITLE : </TitleText>
              <TitleInput
                type="text"
                placeholder="소통창구 이름을 입력하세요."
                width="22rem"
                value={title}
                disabled
              ></TitleInput>
            </TitleContainer>

            <TitleContainer width="40rem">
              <SubText>창구 게시 기간 : </SubText>
              <PeriodWrapper>
                <PeriodLabel>
                  <PeriodRadio
                    type="radio"
                    value={counterPeriod}
                    checked={counterPeriod === 7}
                    disabled
                  ></PeriodRadio>
                  7일
                </PeriodLabel>
                <PeriodLabel>
                  <PeriodRadio
                    type="radio"
                    value={counterPeriod}
                    checked={counterPeriod === 15}
                    disabled
                  ></PeriodRadio>
                  15일
                </PeriodLabel>
              </PeriodWrapper>
            </TitleContainer>
          </DivWrapper>
          <DivWrapper>
            <MiddleContainer>
              <SubText>관련 부서 연락처 : </SubText>
              <TitleInput
                type="text"
                value={contactNumber}
                disabled
              ></TitleInput>
              <SubText>이메일 : </SubText>
              <TitleInput
                type="text"
                value={contactEmail}
                disabled
              ></TitleInput>
            </MiddleContainer>
          </DivWrapper>
          <DivWrapper>
            <ContentContainer>
              <ContentWrapper>
                <SubText>내용 : </SubText>
                <ContentTextArea
                  type="text"
                  value={contents}
                  disabled
                ></ContentTextArea>
              </ContentWrapper>
              <TermWrapper>
                {Object.values(COMPLAINT_TERMS).map((term, index) => (
                  <TermText key={index}>{term}</TermText>
                ))}
              </TermWrapper>
            </ContentContainer>
          </DivWrapper>

          <ButtonWrapper>
            <ExtendBtn onClick={handlePeriod}>창구연장</ExtendBtn>
            <CreateBtn onClick={handleEdit}>수정</CreateBtn>{" "}
            <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
          </ButtonWrapper>
        </CounterDiv1>
        <QRcodeWrapper>
          <QRcode value={QRcodeUrl} size="150"></QRcode>
          <QRcodeMessage>qr코드를 캡쳐해서 사용해주세요</QRcodeMessage>
        </QRcodeWrapper>
      </CounterWrapper>
    </CounteDetailWrapper>
  );
};

CounterDetail.propTypes = {
  mainText: propTypes.string.isRequired,
};
export default CounterDetail;
