import React, { useState, useEffect } from "react";

import * as N from "./Navbar.style.jsx";
import { ReactComponent as Checklist } from "../images/Checklist.svg";
import { ReactComponent as BottomArrow } from "../images/BottomArrow.svg";
import { ReactComponent as TopArrow } from "../images/TopArrow.svg";

import { ReactComponent as Complain } from "../images/Complain.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [checkListMenu, setCheckListMenu] = useState(false);
  const [complainMenu, setComplainMenu] = useState(false);

  const onCheckListToggle = () => {
    setCheckListMenu(!checkListMenu);
  };

  const onComplainToggle = () => {
    setComplainMenu(!complainMenu);
  };

  return (
    <N.NavWrapper>
      <N.LogoWrapper>
        <N.LogoImg onClick={() => navigate("/")} />
      </N.LogoWrapper>
      <N.NavContainer>
        <N.SideBox>
          <N.SideBox_Side>
            <Checklist width={20} height={17} />
          </N.SideBox_Side>
          <N.SideBox_Span>소통창구</N.SideBox_Span>
          <N.SideBox_Side onClick={onCheckListToggle}>
            {checkListMenu ? <TopArrow /> : <BottomArrow />}
          </N.SideBox_Side>
        </N.SideBox>
        {checkListMenu ? (
          <N.UnderSideBox>
            <N.SideBox_List onClick={() => navigate("/allso/counter_create")}>
              <N.SideBoxInnerSpan color="#000000">
                소통창구 생성
              </N.SideBoxInnerSpan>
            </N.SideBox_List>
            <N.SideBox_List onClick={() => navigate("/allso/counter")}>
              <N.SideBoxInnerSpan color="#000000">
                소통창구 목록
              </N.SideBoxInnerSpan>
            </N.SideBox_List>
            <N.SideBox_List
              onClick={() => navigate("/allso/counter/detail/:id")}
            >
              <N.SideBoxInnerSpan color="#000000">
                소통창구 상세
              </N.SideBoxInnerSpan>
            </N.SideBox_List>
          </N.UnderSideBox>
        ) : (
          <></>
        )}
      </N.NavContainer>

      <N.NavContainer>
        <N.SideBox>
          <N.SideBox_Side>
            <Complain width={22} height={16} />
          </N.SideBox_Side>
          <N.SideBox_Span>컴플레인</N.SideBox_Span>
          <N.SideBox_Side onClick={onComplainToggle}>
            {complainMenu ? <TopArrow /> : <BottomArrow />}
          </N.SideBox_Side>
        </N.SideBox>
        {complainMenu ? (
          <N.UnderSideBox>
            <N.SideBox_List onClick={() => navigate("/allso/problem")}>
              <N.SideBoxInnerSpan color="#000000">
                컴플레인 목록
              </N.SideBoxInnerSpan>
            </N.SideBox_List>
            <N.SideBox_List
              onClick={() => navigate("/allso/problem/detail/:id")}
            >
              <N.SideBoxInnerSpan color="#000000">
                컴플레인 상세
              </N.SideBoxInnerSpan>
            </N.SideBox_List>
          </N.UnderSideBox>
        ) : (
          <></>
        )}
      </N.NavContainer>
    </N.NavWrapper>
  );
};

export default Navbar;
