import React from "react";
import * as H from "./Header.style.jsx";
import { ReactComponent as UserIcon } from "../images/User.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <H.HeaderBox>
      <H.Title>나의 민원 관리, 옳소.</H.Title>
      <H.InfoBox>
        <H.InfoBoxWrapper>
          <H.InfoBox>
            <H.UserIcon1 onClick={() => alert("유저정보 준비중")} />
            <H.Info_span marginLeft="5px">User님</H.Info_span>
          </H.InfoBox>
          <H.HomeIcon onClick={() => navigate("/")}></H.HomeIcon>
          <H.SettingIcon></H.SettingIcon>
        </H.InfoBoxWrapper>
      </H.InfoBox>
    </H.HeaderBox>
  );
};

export default Header;
