import React from "react";
import {
  UserProblemWrapper,
  UserProblemLayout,
  UserProblemMainWrapper,
  CounterTitleWrapper,
  CouterTitleContainer,
  CounterTextWrapper,
  CounterText,
  CounterTitleText,
  CounterContentWrapper,
  CounterContentContainer,
  CounterContentText,
  CounterTermsWrapper,
  CounterTermsText,
} from "./UserCounterInfo.style";
import UserProblemHeaderCp from "components/UserProblem/UserProblemHeaderCp";
import UserProblemFooter from "components/UserProblem/UserProblemFooter";

import { useNavigate } from "react-router-dom";

const UserCounterInfo = () => {
  const navigate = useNavigate();

  return (
    <UserProblemWrapper>
      <UserProblemLayout>
        <UserProblemHeaderCp></UserProblemHeaderCp>
        <UserProblemMainWrapper>
          <CounterTitleWrapper>
            <CouterTitleContainer>
              <CounterTextWrapper>
                <CounterText>소통창구 이름</CounterText>
              </CounterTextWrapper>
              <CounterTitleText>가톨릭대 민원 소통창구</CounterTitleText>
            </CouterTitleContainer>
          </CounterTitleWrapper>
          <CounterContentWrapper>
            <CounterTextWrapper mg="1rem">
              <CounterText>소통창구 내용</CounterText>
            </CounterTextWrapper>
            <CounterContentContainer>
              <CounterContentText>
                학생들을 위한 학교 전체 시설보수팀 소통창구
              </CounterContentText>
            </CounterContentContainer>
            <CounterTermsWrapper>
              <CounterTermsText>
                1. 접수한 컴플레인은 내부 사정에 따라 해결이 지연되거나 보류될
                수 있습니다.
                <CounterTermsText>
                  2. 컴플레인 관련 해결여부를 전달 받고 싶으시다면 이메일이나
                  전화번호를 입력해주세요.
                </CounterTermsText>
                <CounterTermsText> </CounterTermsText>
                3. 부적절한 내용이 포함되어 있거나 해당 소통창구에 적합하지 않은
                컴플레인은 영구 삭제될 수 있습니다.
                <CounterTermsText> </CounterTermsText>
                4. 컴플레인 내용을 자세히 작성해주시면 해결에 더욱 도움이
                됩니다.
                <CounterTermsText>
                  5. 컴플레인 답변을 사칭한 전화사기에 유의하시기 바랍니다.
                </CounterTermsText>
              </CounterTermsText>
            </CounterTermsWrapper>
          </CounterContentWrapper>
        </UserProblemMainWrapper>
        <UserProblemFooter
          btnText="컴플레인 등록"
          onClickfn={() => navigate("/allso/u/problem/1")}
        ></UserProblemFooter>
      </UserProblemLayout>
    </UserProblemWrapper>
  );
};

export default UserCounterInfo;
