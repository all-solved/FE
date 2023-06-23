import React from "react";
import {
  UserProblemHeaderContainer,
  UserProblemHeader,
  UserProblemHeaderBox,
  MainText,
  HeaderImg,
  SubText,
} from "./UserProblemHeaderCp.style";

const UserProblemHeaderCp = () => {
  return (
    <UserProblemHeaderContainer>
      <UserProblemHeader>
        <HeaderImg></HeaderImg>
      </UserProblemHeader>
      <UserProblemHeaderBox>
        <MainText>고객의 소리</MainText>
        <SubText>편리한 VOC 플랫폼, 옳소</SubText>
        <SubText>컴플레인 접수</SubText>
      </UserProblemHeaderBox>
    </UserProblemHeaderContainer>
  );
};

export default UserProblemHeaderCp;
