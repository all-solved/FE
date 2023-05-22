import styled from "styled-components";
import { ReactComponent as Home } from "assets/images/svg/home.svg";
import { ReactComponent as Setting } from "assets/images/svg/setting.svg";

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  padding: 0 5%;

  border-bottom: 1px solid #e4e4e4;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const InfoBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 14rem;
`;
export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontBold.bold};
`;

export const Info_span = styled.span`
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.medium};
`;

export const HomeIcon = styled(Home)`
  cursor: pointer;
`;
export const SettingIcon = styled(Setting)`
  cursor: pointer;
`;
