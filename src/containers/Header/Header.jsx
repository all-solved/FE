import React from "react";
import * as H from "./Header.style.jsx";
import { ReactComponent as UserIcon } from "../images/User.svg";

const Header = () => {
  return (
    <H.HeaderBox>
      <H.Title>나의 민원 관리, 옳소.</H.Title>
      <H.InfoBox>
        <H.InfoBoxWrapper>
          <H.InfoBox>
            <UserIcon />
            <H.Info_span marginLeft="5px">User님</H.Info_span>
          </H.InfoBox>
          <H.HomeIcon></H.HomeIcon>
          <H.SettingIcon></H.SettingIcon>
        </H.InfoBoxWrapper>
      </H.InfoBox>
    </H.HeaderBox>
  );
};

export default Header;
