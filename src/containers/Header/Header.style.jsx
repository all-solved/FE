import styled from "styled-components";

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 10px 30px;
  padding-right: 60px;
  margin-left: 250px;
  border-bottom: 1px solid #e4e4e4;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontBold.bold};
`;

export const Info_span = styled.span`
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-size: ${(props) => props.theme.fontSize.ssm};
  font-weight: ${(props) => props.theme.fontBold.medium};
`;
