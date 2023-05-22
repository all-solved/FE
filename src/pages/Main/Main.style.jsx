import styled from "styled-components";
import { ReactComponent as Plus } from "assets/images/svg/Plus.svg";

// 큰 Div
export const MainWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};
  align-items: ${(props) => props.align};
  margin-left: ${(props) => props.marginLeft || "0px"};
  padding-left: ${(props) => props.paddingLeft || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  height: ${(props) => props.height};
`;

// UserBox 부분
export const UserBox = styled.div`
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

export const DivBox = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};

  flex-direction: ${(props) => props.flex || "row"};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
`;

export const UserFont1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.medium};
  color: ${(props) => props.color || "white"};
`;

export const UserFont2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontBold.bold};
  color: white;
`;

export const UserFont3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.regular};
  color: white;
  margin-top: 1px;
`;

export const UserFont4 = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.regular};
  color: white;
  margin-right: ${(props) => props.marginRight};
`;

export const UserFont5 = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.bold};
  color: ${(props) => props.color || "white"};
`;

export const FontDiv = styled.div`
  display: flex;
  width: 28px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
`;

// menu title
export const MenuTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontBold.bold};
  color: ${(props) => props.color};
`;

export const TitleBox = styled.div`
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
export const CommuBox = styled.div`
  display: flex;
  width: 750px;
  height: 240px;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Commu_SubBox = styled.div`
  display: flex;
  width: 200px;
  height: 150px;
  flex-direction: column;
  background-color: #edeffa;
  border-radius: 12px;
  margin-right: 15px;
  box-shadow: 0px 24px 48px 0 rgba(0, 0, 0, 0.16);
`;

export const CommuFont1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.bold};
  margin-top: 18px;
`;

export const CommuFont2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontBold.regular};
`;

// Notice 부분
export const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  margin-right: 60px;
`;

export const NoticeContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  margin-top: 15px;
  margin-bottom: 20px;
  padding: 0px 20px;
`;

export const NoticeSpanBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15px;
  margin-bottom: 10px;
`;

export const NoticeFont1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.light};
  color: white;
  text-align: center;
`;

export const NoticeFont2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.regular};
  line-height: 15px;
`;

export const NoticeFont3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.regular};
  color: #7b7b7b;
  line-height: 15px;
`;

// 전체 접수된 민원 부분
export const ComplainBox = styled.div`
  display: flex;
  width: 750px;
  flex-direction: column;
`;

export const PlusImage = styled(Plus)`
  margin-left: 1rem;
`;
