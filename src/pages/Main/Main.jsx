import React from "react";
import * as M from "./Main.style.jsx";
import { CounterData, NoticeData } from "../DummyData/DummyData";
import { ReactComponent as UserIcon } from "assets/images/svg/User.svg";
import { ReactComponent as DummyImg } from "assets/images/svg/Dummy.svg";

const Main = () => {
  return (
    <M.MainWrapper>
      <M.MainBox paddingLeft="5%" align="flex-end" marginBottom="70px">
        <M.UserBox>
          <M.DivBox justify="space-between" align="center">
            <UserIcon />
            <M.DivBox>
              <M.UserFont1 color="#AEAEAE">로그아웃</M.UserFont1>
            </M.DivBox>
          </M.DivBox>
          <M.DivBox flex="column" marginTop="10px">
            <M.UserFont2>
              User <M.UserFont3> 님 </M.UserFont3>{" "}
            </M.UserFont2>
            <M.UserFont3> 오늘의 민원을 해결해주세요 :)</M.UserFont3>
          </M.DivBox>
          <M.DivBox flex="column" marginTop="35px">
            <M.DivBox align="center" justify="end">
              <M.UserFont4 marginRight="1rem">해결되지 않은 민원</M.UserFont4>
              <M.FontDiv>
                <M.UserFont5 color="#FF0000">12</M.UserFont5>
              </M.FontDiv>
            </M.DivBox>
            <M.DivBox marginTop="10px" align="center" justify="end">
              <M.UserFont4 marginRight="1rem">오늘 접수된 민원</M.UserFont4>
              <M.FontDiv>
                <M.UserFont5 color="#000000">3</M.UserFont5>
              </M.FontDiv>
            </M.DivBox>
          </M.DivBox>
        </M.UserBox>
        <M.CommuBox>
          <M.MenuTitle>나의 소통창구</M.MenuTitle>

          <M.DivBox align="center" marginTop="15px">
            {CounterData.map((data) => (
              <M.DivBox>
                <M.Commu_SubBox>
                  <DummyImg />
                  <M.MainBox marginLeft="10%" flex="column">
                    <M.CommuFont1>{data.title}</M.CommuFont1>
                    <M.CommuFont2>{data.date}</M.CommuFont2>
                  </M.MainBox>
                </M.Commu_SubBox>
              </M.DivBox>
            ))}
            <M.PlusImage />
          </M.DivBox>
        </M.CommuBox>
      </M.MainBox>
      <M.MainBox paddingLeft="5%" align="flex-start">
        <M.NoticeBox>
          <M.TitleBox>
            <M.MenuTitle color="white">Notice</M.MenuTitle>
            <M.NoticeFont1>더보기 +</M.NoticeFont1>
          </M.TitleBox>
          <M.NoticeContentBox>
            {NoticeData.map((data) => (
              <M.NoticeSpanBox>
                <M.NoticeFont2>{data.title}</M.NoticeFont2>
                <M.NoticeFont3>{data.date}</M.NoticeFont3>
              </M.NoticeSpanBox>
            ))}
          </M.NoticeContentBox>
        </M.NoticeBox>
        <M.ComplainBox>
          <M.TitleBox>
            <M.MenuTitle color="white">전체 접수된 민원</M.MenuTitle>
          </M.TitleBox>
        </M.ComplainBox>
      </M.MainBox>
    </M.MainWrapper>
  );
};

export default Main;
