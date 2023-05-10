import React from "react";
import styled from "styled-components";
import { ReactComponent as UserIcon } from "../images/User.svg";

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 10px 30px;
  padding-right: 60px;
  margin-left: 250px;
  border-bottom: 1px solid #e4e4e4;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.bold};
`;

const Info_span = styled.span`
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-size: ${(props) => props.theme.fontSize.ssm};
  font-weight: ${(props) => props.theme.fontBold.medium};
`;

const Header = (props) => {
  return (
    <HeaderBox>
      <Title>{props.title}</Title>
      <InfoBox>
        <InfoBox marginLeft="15px" marginRight="15px">
          <UserIcon />
          <Info_span marginLeft="5px">User님</Info_span>
        </InfoBox>
        <Info_span marginLeft="15px" marginRight="15px">
          홈
        </Info_span>
        <Info_span marginLeft="15px" marginRight="15px">
          로그아웃
        </Info_span>
      </InfoBox>
    </HeaderBox>
  );
};

export default Header;
