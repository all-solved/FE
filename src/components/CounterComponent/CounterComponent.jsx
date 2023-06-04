import React from "react";
import CustomCheckbox from "./Check";
import {
  CounterBox,
  CounterDiv,
} from "pages/Counter/CounterSelect/Counter.style";
import {
  TitleContainer,
  DivWrapper,
  TitleText,
  TitleInput,
  SubText,
  DateWrapper,
  DateContainer,
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
import { Div } from "containers/Navbar/Navbar.style";

const CounterComponent = ({ mainText, create, rule }) => {
  return (
    <CounterBox>
      <Title mainText={mainText}></Title>
      <CounterDiv>
        <DivWrapper>
          <TitleContainer width="40rem">
            <TitleText>TITLE : </TitleText>
            <TitleInput placeholder="소통창구 이름을 입력하세요."></TitleInput>
          </TitleContainer>

          <TitleContainer width="40rem">
            <SubText>창구 게시 기간 : </SubText>
            <DateWrapper>
              <DateContainer>
                <CustomCheckbox></CustomCheckbox>
                <SubText>7일</SubText>
              </DateContainer>
              <DateContainer>
                <CustomCheckbox></CustomCheckbox>
                <SubText>15일</SubText>
              </DateContainer>
            </DateWrapper>
          </TitleContainer>
        </DivWrapper>
        <DivWrapper>
          <TitleContainer width="100rem">
            <SubText>관련 부서 연락처 : </SubText>
            <TitleInput></TitleInput>
            <SubText>이메일 : </SubText>
            <TitleInput></TitleInput>
          </TitleContainer>
        </DivWrapper>
        <DivWrapper>
          <ContentContainer width="100rem">
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

export default CounterComponent;
