import React, { useState, useEffect } from "react";

import * as N from "./Navbar.style.jsx";
import { ReactComponent as Checklist } from "../images/Checklist.svg";
import { ReactComponent as BottomArrow } from "../images/BottomArrow.svg";
import { ReactComponent as TopArrow } from "../images/TopArrow.svg";
import { ReactComponent as Logo } from "../images/Logo.svg";
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
    <N.Side>
      <N.Div height="15%" marginTop="10px" marginBottom="80px">
        <Logo width={80} height={30} />
      </N.Div>
      <N.Div height="30%">
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
          <>
            <N.SideBox_List onClick={() => navigate("/allso/counter")}>
              <N.SideBox_Span color="#000000">소통창구 조회</N.SideBox_Span>
            </N.SideBox_List>
            <N.SideBox_List onClick={() => navigate("/counter_detail:id")}>
              <N.SideBox_Span color="#000000">소통창구 상세</N.SideBox_Span>
            </N.SideBox_List>
          </>
        ) : (
          <></>
        )}
      </N.Div>

      <N.Div height="30%">
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
          <>
            <N.SideBox_List>
              <N.SideBox_Span color="#000000">컴플레인 조회</N.SideBox_Span>
            </N.SideBox_List>
            <N.SideBox_List>
              <N.SideBox_Span color="#000000">컴플레인 상세</N.SideBox_Span>
            </N.SideBox_List>
          </>
        ) : (
          <></>
        )}
      </N.Div>
      <N.Div height="50%"></N.Div>
    </N.Side>
  );
};

export default Navbar;
