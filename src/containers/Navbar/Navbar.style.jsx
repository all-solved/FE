import styled from "styled-components";
import { ReactComponent as Logo } from "assets/images/svg/Logo.svg";
import { ReactComponent as BoldLogo } from "assets/images/svg/BoldLogo.svg";
export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100vh;
  padding: 0 15px;
  border-right: 1px solid #e4e4e4;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 250px;
  height: 100vh;
  padding: 0 15px;
  border-right: 1px solid #e4e4e4;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;
export const Div = styled.div`
  display: flex;
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  padding-top: ${(props) => props.paddingTop || "0px"};
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
  height: ${(props) => props.height};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  height: 15rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 12rem;
  margin-top: 2rem;
`;

export const SideBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.mainBlue};
  padding: 15px 13px;
  border-radius: 10px;
  width: 100%;
  position: absolute;
`;

export const SideBox_Side = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  cursor: pointer;
`;

export const SideBox_Span = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  margin: 0 5px;
  margin-right: 15px;
  color: ${(props) => props.color || "white"};
  width: 60%;
  font-weight: ${(props) => props.theme.fontBold.regular};
`;

export const SideBoxInnerSpan = styled(SideBox_Span)`
  font-size: ${(props) => props.theme.fontSize.md};
`;

export const UnderSideBox = styled.div`
  margin-top: 6rem;
  width: 100%;
`;

export const SideBox_List = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  padding-left: 19%;
  width: 100%;

  cursor: pointer;
`;

export const LogoImg = styled(BoldLogo)`
  width: 14rem;
  height: 8rem;
  cursor: pointer;
`;
