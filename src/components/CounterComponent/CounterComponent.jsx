import React from "react";
import CustomCheckbox from "./Check";
import {
  CounterBox,
  CounterDiv,
} from "pages/Counter/CounterSelect/Counter.style";
import propTypes from "prop-types";
import {
  TitleContainer,
  MiddleContainer,
  DivWrapper,
  TitleText,
  TitleInput,
  SubText,
  PeriodWrapper,
  PeriodLabel,
  PeriodRadio,
  ContentContainer,
  ContentTextArea,
  ContentWrapper,
  TermWrapper,
  TermText,
  ButtonWrapper,
  CreateBtn,
  SaveBtn,
  DeleteBtn,
} from "./CounterComponent.style";
import Title from "components/Title/Title";
import { COMPLAINT_TERMS } from "constants/CounterCreateTerms";

const CounterComponent = ({ mainText, create, width, data }) => {
  const { title, counterDate, contactNumber, contactEmail, contents } =
    data || {};
  return (
    <CounterBox>
      <Title mainText={mainText}></Title>
      <CounterDiv width={width}>
        <DivWrapper>
          <TitleContainer>
            <TitleText>TITLE : </TitleText>
            <TitleInput placeholder="소통창구 이름을 입력하세요."></TitleInput>
          </TitleContainer>

          <TitleContainer width="40rem">
            <SubText>창구 게시 기간 : </SubText>
            <PeriodWrapper>
              <PeriodLabel>
                <PeriodRadio type="radio" value="" checked=""></PeriodRadio>
                7일
              </PeriodLabel>
              <PeriodLabel>
                <PeriodRadio type="radio" value="" checked=""></PeriodRadio>
                15일
              </PeriodLabel>
            </PeriodWrapper>
          </TitleContainer>
        </DivWrapper>
        <DivWrapper>
          <MiddleContainer>
            <SubText>관련 부서 연락처 : </SubText>
            <TitleInput></TitleInput>
            <SubText>이메일 : </SubText>
            <TitleInput></TitleInput>
          </MiddleContainer>
        </DivWrapper>
        <DivWrapper>
          <ContentContainer>
            <ContentWrapper>
              <SubText>내용 : </SubText>
              <ContentTextArea></ContentTextArea>
            </ContentWrapper>
            <TermWrapper>
              {Object.values(COMPLAINT_TERMS).map((term, index) => (
                <TermText key={index}>{term}</TermText>
              ))}
            </TermWrapper>
          </ContentContainer>
        </DivWrapper>

        {create ? (
          <ButtonWrapper>
            <SaveBtn>임시 저장</SaveBtn>
            <CreateBtn>완료</CreateBtn>{" "}
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <SaveBtn>창구연장</SaveBtn>
            <CreateBtn>수정</CreateBtn> <DeleteBtn>삭제</DeleteBtn>
          </ButtonWrapper>
        )}
      </CounterDiv>
    </CounterBox>
  );
};

CounterComponent.propTypes = {
  mainText: propTypes.string.isRequired,
};
export default CounterComponent;
