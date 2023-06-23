import styled from "styled-components";
import { CounterContentWrapper } from "pages/UserCounterInfo/UserCounterInfo.style";
export const TitleInput = styled.input`
  width: 100%;
  height: 3rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  /* font-weight: ${({ theme }) => theme.fontBold.bold}; */
  padding: 0 0.5rem;

  border: 1px solid black;
  border-radius: 10px;
`;

export const ProblemUrgencyWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 4rem;

  border: 1px solid black;
  border-radius: 10px;

  margin-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const ProblemUrgencySelect = styled.select`
  width: 12rem;
  height: 4rem;

  z-index: 2;
`;

export const ProblemUrgencyOption = styled.option`
  display: flex;
  justify-content: center;
  text-align: center;

  padding: 0.5rem;
`;

export const ContentWrapper = styled(CounterContentWrapper)`
  height: 20rem;
`;
