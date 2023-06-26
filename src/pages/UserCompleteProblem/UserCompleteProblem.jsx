import {
  UserProblemWrapper,
  UserProblemLayout,
  UserProblemMainWrapper,
  CounterTitleWrapper,
  CouterTitleContainer,
  CounterTextWrapper,
  CounterText,
} from "pages/UserCounterInfo/UserCounterInfo.style";

import UserProblemHeaderCp from "components/UserProblem/UserProblemHeaderCp";
import UserProblemFooter from "components/UserProblem/UserProblemFooter";

import React from "react";

const UserCompleteProblem = () => {
  return (
    <UserProblemWrapper>
      <UserProblemLayout>
        <UserProblemHeaderCp></UserProblemHeaderCp>
        <UserProblemMainWrapper>컴플레인 접수 완료</UserProblemMainWrapper>
        <UserProblemFooter></UserProblemFooter>
      </UserProblemLayout>
    </UserProblemWrapper>
  );
};

export default UserCompleteProblem;
