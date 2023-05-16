import React from "react";
import * as H from "./Header.style.jsx";
import { ReactComponent as UserIcon } from "../images/User.svg";

const Header = (props) => {
  return (
    <H.HeaderBox>
      <H.Title>{props.title}</H.Title>
      <H.InfoBox>
        <H.InfoBox marginLeft="15px" marginRight="15px">
          <UserIcon />
          <H.Info_span marginLeft="5px">User님</H.Info_span>
        </H.InfoBox>
        <H.Info_span marginLeft="15px" marginRight="15px">
          홈
        </H.Info_span>
        <H.Info_span marginLeft="15px" marginRight="15px">
          로그아웃
        </H.Info_span>
      </H.InfoBox>
    </H.HeaderBox>
  );
};

export default Header;
