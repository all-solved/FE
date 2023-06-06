import styled from "styled-components";
import theme from "styles/theme";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 3.4rem;

  margin-bottom: 3rem;
`;

export const HeadText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontBold.bold};
`;

export const SubText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontBold.medium};
  color: #7b7b7b;
  margin-top: 3px;
`;
