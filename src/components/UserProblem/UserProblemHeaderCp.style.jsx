import styled from "styled-components";
import { ReactComponent as BoldLogoWhite } from "assets/images/svg/BoldLogoWhite.svg";
export const UserProblemHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const UserProblemHeader = styled.header`
  display: flex;
  justify-content: start;
  height: 6.4rem;
  width: 100%;
  margin: 1.2rem 1.6rem;
`;
export const HeaderImg = styled(BoldLogoWhite)`
  width: 6rem;
  height: 2.5rem;
`;
export const UserProblemHeaderBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const MainText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.white};
`;

export const SubText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontBold.light};
  color: ${({ theme }) => theme.colors.white};
`;
