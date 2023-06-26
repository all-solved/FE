import styled from "styled-components";

export const UserProblemWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainGrey};
`;

export const UserProblemLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 37.5rem;

  background-color: ${({ theme }) => theme.colors.mainBlue};
`;

export const UserProblemMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 64rem;
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CounterTitleWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 90%;
  height: 5rem;

  border: 1px solid black;
  border-radius: 10px;

  margin-top: 3rem;
`;

export const CouterTitleContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin: 0 1rem;
`;
export const CounterTextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 13rem;
  height: 3rem;

  margin-left: ${(props) => props && props.mg};
  margin-right: ${(props) => props && props.mg};
`;
export const CounterText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontBold.bold};
`;
export const CounterTitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 3rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  /* font-weight: ${({ theme }) => theme.fontBold.bold}; */
  padding: 0 0%.5;
`;

export const CounterContentWrapper = styled(CounterTitleWrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 30rem;
  margin-top: 2rem;
`;

export const CounterContentContainer = styled.article`
  display: flex;
  height: 9rem;
  margin: 0 1rem;
`;

export const CounterContentText = styled(CounterTitleText)`
  text-align: left;
`;

export const CounterTermsWrapper = styled.section`
  margin: 0 1rem;
  height: 10rem;
`;

export const CounterTermsText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.strokeGrey};
`;
