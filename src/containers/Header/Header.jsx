import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100vw;
  height: 100px;
  padding: 0 15px;
  margin-left: 20%;
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontBold.bold};
`;

const Header = () => {
  return (
    <HeaderBox>
      <Title>나의 민원 관리. 옳소.</Title>
    </HeaderBox>
  );
};

export default Header;
