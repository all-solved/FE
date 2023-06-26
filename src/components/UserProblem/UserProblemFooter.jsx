import React from "react";
import { UserProblemFooterWrapper, FooterBtn } from "./UserProblemFooter.style";
const UserProblemFooter = ({ btnText, onClickfn }) => {
  return (
    <UserProblemFooterWrapper>
      <FooterBtn onClick={onClickfn}>{btnText}</FooterBtn>
    </UserProblemFooterWrapper>
  );
};

export default UserProblemFooter;
