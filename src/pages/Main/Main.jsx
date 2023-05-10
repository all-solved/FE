import React from "react";
import styled from "styled-components";
import Navbar from "../../containers/Navbar/Navbar";
import { ReactComponent as UserIcon } from "../images/User.svg";
import { ReactComponent as DummyImg } from "../images/Dummy.svg";
import { ReactComponent as Plus } from "../images/Plus.svg";

// 큰 Div
const MainBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};
  align-items: ${(props) => props.align};
  margin-left: ${(props) => props.marginLeft || "0px"};
  padding-left: ${(props) => props.paddingLeft || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  height: ${(props) => props.height};
  width: 100%;
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontBold.black};
  margin-top: 60px;
`;

// UserBox 부분
const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 230px;
  background-color: ${(props) => props.theme.colors.mainBlue};
  border-radius: 12px;
  margin-right: 60px;
  padding: 30px;
  padding-top: 25px;
  padding-right: 20px;
`;

const DivBox = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.flex || "row"};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
`;

const UserFont1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontBold.semiBold};
  color: ${(props) => props.color || "white"};
  margin-right: ${(props) => props.marginRight};
`;

const UserFont2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontBold.semiBold};
  color: white;
`;

const UserFont3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxs};
  font-weight: ${(props) => props.theme.fontBold.medium};
  color: white;
  margin-top: 3px;
`;

const UserFont4 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontBold.semiBold};
  color: white;
  margin-right: ${(props) => props.marginRight};
`;

const UserFont5 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontBold.bold};
  color: ${(props) => props.color || "white"};
`;

const FontDiv = styled.div`
  display: flex;
  width: 28px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
`;

// menu title
const MenuTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: ${(props) => props.theme.fontBold.semiBold};
  color: ${(props) => props.color};
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 290px;
  height: 35px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.mainBlue};
  padding: 0 20px;
`;

// 나의 소통창구 부분
const CommuBox = styled.div`
  display: flex;
  width: 750px;
  height: 240px;
  flex-direction: column;
  justify-content: flex-end;
`;

const Commu_SubBox = styled.div`
  display: flex;
  width: 200px;
  height: 150px;
  flex-direction: column;
  background-color: #edeffa;
  border-radius: 12px;
  margin-right: 15px;
  box-shadow: 0px 24px 48px 0 rgba(0, 0, 0, 0.16);
`;

const CommuFont1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontBold.bold};
  margin-bottom: 5px;
  margin-top: 15px;
`;

const CommuFont2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontBold.medium};
`;

// Notice 부분
const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  margin-right: 60px;
`;

const NoticeContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  margin-top: 20px;
  padding: 0px 20px;
`;

const NoticeSpanBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-center: center;
  height: 15px;
  margin-bottom: 10px;
`;

const NoticeFont1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontBold.light};
  color: white;
  text-align: center;
`;

const NoticeFont2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: ${(props) => props.theme.fontBold.regular};
  line-height: 15px;
`;

const NoticeFont3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontBold.regular};
  color: #7b7b7b;
  line-height: 15px;
`;

// 전체 접수된 민원 부분
const ComplainBox = styled.div`
  display: flex;
  width: 750px;
  flex-direction: column;
`;

const Main = () => {
  return (
    <>
      <Navbar />
      <MainBox height="130px" marginLeft="16%" paddingLeft="5%">
        <Title>나의 민원 관리. 옳소.</Title>
      </MainBox>
      <MainBox
        height="100%"
        marginLeft="16%"
        paddingLeft="5%"
        align="flex-end"
        marginBottom="70px"
      >
        <UserBox>
          <DivBox>
            <UserIcon />
            <DivBox marginLeft="105px">
              <UserFont1 color="#FF7D7D" marginRight="8px">
                나의 민원
              </UserFont1>
              <UserFont1 color="#AEAEAE">로그아웃</UserFont1>
            </DivBox>
          </DivBox>
          <DivBox flex="column" marginTop="10px">
            <UserFont2>User 님</UserFont2>
            <UserFont3>오늘의 민원을 해결해주세요 :)</UserFont3>
          </DivBox>
          <DivBox flex="column" marginLeft="120px" marginTop="40px">
            <DivBox align="center" justify="space-between">
              <UserFont4 marginRight="5px">해결되지 않은 민원</UserFont4>
              <FontDiv>
                <UserFont5 color="#FF0000">12</UserFont5>
              </FontDiv>
            </DivBox>
            <DivBox marginTop="10px" align="center" justify="space-between">
              <UserFont4 marginRight="5px">오늘 접수된 민원</UserFont4>
              <FontDiv>
                <UserFont5 color="#000000">3</UserFont5>
              </FontDiv>
            </DivBox>
          </DivBox>
        </UserBox>
        <CommuBox>
          <MenuTitle>나의 소통창구</MenuTitle>
          <DivBox align="center" marginTop="20px">
            <DivBox>
              <Commu_SubBox>
                <DummyImg />
                <MainBox marginLeft="10%" flex="column">
                  <CommuFont1>가톨릭대 행정관련 민원</CommuFont1>
                  <CommuFont2>2023.04.01</CommuFont2>
                </MainBox>
              </Commu_SubBox>
            </DivBox>
            <DivBox>
              <Commu_SubBox>
                <DummyImg />
                <MainBox marginLeft="10%" flex="column">
                  <CommuFont1>가톨릭대 행정관련 민원</CommuFont1>
                  <CommuFont2>2023.04.01</CommuFont2>
                </MainBox>
              </Commu_SubBox>
            </DivBox>
            <DivBox>
              <Commu_SubBox>
                <DummyImg />
                <MainBox marginLeft="10%" flex="column">
                  <CommuFont1>가톨릭대 행정관련 민원</CommuFont1>
                  <CommuFont2>2023.04.01</CommuFont2>
                </MainBox>
              </Commu_SubBox>
            </DivBox>
            <Plus />
          </DivBox>
        </CommuBox>
      </MainBox>
      <MainBox
        height="100%"
        marginLeft="16%"
        paddingLeft="5%"
        align="flex-start"
      >
        <NoticeBox>
          <TitleBox>
            <MenuTitle color="white">Notice</MenuTitle>
            <NoticeFont1>더보기 +</NoticeFont1>
          </TitleBox>
          <NoticeContentBox>
            <NoticeSpanBox>
              <NoticeFont2>페이지 사용법 알려드립니다. 확인...</NoticeFont2>
              <NoticeFont3>04.01</NoticeFont3>
            </NoticeSpanBox>
            <NoticeSpanBox>
              <NoticeFont2>페이지 사용법 알려드립니다. 확인...</NoticeFont2>
              <NoticeFont3>04.01</NoticeFont3>
            </NoticeSpanBox>
            <NoticeSpanBox>
              <NoticeFont2>페이지 사용법 알려드립니다. 확인...</NoticeFont2>
              <NoticeFont3>04.01</NoticeFont3>
            </NoticeSpanBox>
          </NoticeContentBox>
        </NoticeBox>
        <ComplainBox>
          <TitleBox>
            <MenuTitle color="white">전체 접수된 민원</MenuTitle>
          </TitleBox>
        </ComplainBox>
      </MainBox>
    </>
  );
};

export default Main;
