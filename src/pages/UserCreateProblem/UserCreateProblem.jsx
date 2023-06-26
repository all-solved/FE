import React from "react";
import UserProblemHeaderCp from "components/UserProblem/UserProblemHeaderCp";
import UserProblemFooter from "components/UserProblem/UserProblemFooter";

import {
  UserProblemWrapper,
  UserProblemLayout,
  UserProblemMainWrapper,
  CounterTitleWrapper,
  CouterTitleContainer,
  CounterTextWrapper,
  CounterText,
} from "pages/UserCounterInfo/UserCounterInfo.style";

import {
  TitleInput,
  ProblemUrgencyWrapper,
  ProblemUrgencySelect,
  ProblemUrgencyOption,
  ContentWrapper,
  ContentTextarea,
  AddImgBtn,
  AdditionalWrapper,
  InputWrapper,
  SMSImg,
  PhoneImg,
  AddCircleImg,
  AdditionalInput,
} from "pages/UserCreateProblem/UserCreateProblem.style";

import { useNavigate } from "react-router-dom";

const UserCreateProblem = () => {
  const navigate = useNavigate();
  const handleComplainBtn = () => {
    alert("컴플레인이 접수되었습니다");
    navigate("/allso/u/problem-complete");
  };
  return (
    <UserProblemWrapper>
      <UserProblemLayout>
        <UserProblemHeaderCp></UserProblemHeaderCp>
        <UserProblemMainWrapper>
          <CounterTitleWrapper>
            <CouterTitleContainer>
              <CounterTextWrapper>
                <CounterText>제목</CounterText>
              </CounterTextWrapper>
              <TitleInput></TitleInput>
            </CouterTitleContainer>
          </CounterTitleWrapper>
          <ProblemUrgencyWrapper>
            <CounterText>시급도</CounterText>
            <ProblemUrgencySelect>
              <ProblemUrgencyOption>1</ProblemUrgencyOption>
              <ProblemUrgencyOption>2</ProblemUrgencyOption>
              <ProblemUrgencyOption>3</ProblemUrgencyOption>
              <ProblemUrgencyOption>4</ProblemUrgencyOption>
              <ProblemUrgencyOption>5</ProblemUrgencyOption>
            </ProblemUrgencySelect>
          </ProblemUrgencyWrapper>
          <ContentWrapper>
            <ContentTextarea></ContentTextarea>
          </ContentWrapper>
          <AddImgBtn type="button">
            <AddCircleImg />
            이미지 첨부
          </AddImgBtn>
          <AdditionalWrapper>
            <InputWrapper>
              <PhoneImg />
              <AdditionalInput placeholder="전화번호 입력(선택)"></AdditionalInput>
            </InputWrapper>
            <InputWrapper>
              <SMSImg />
              <AdditionalInput placeholder="이메일 입력(선택)"></AdditionalInput>
            </InputWrapper>
          </AdditionalWrapper>
        </UserProblemMainWrapper>
        <UserProblemFooter
          btnText="컴플레인 접수"
          onClickfn={handleComplainBtn}
        ></UserProblemFooter>
      </UserProblemLayout>
    </UserProblemWrapper>
  );
};

export default UserCreateProblem;
