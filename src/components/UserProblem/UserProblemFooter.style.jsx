import styled from "styled-components";

export const UserProblemFooterWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding-top: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FooterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17.6rem;
  height: 3.3rem;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.white};
`;
