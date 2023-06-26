import styled from "styled-components";
import { CounterContentWrapper } from "pages/UserCounterInfo/UserCounterInfo.style";
import { ReactComponent as AddCircle } from "assets/images/svg/AddCircle.svg";
import { ReactComponent as Phone } from "assets/images/svg/Phone.svg";
import { ReactComponent as SMS } from "assets/images/svg/SMS.svg";
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
  font-size: ${({ theme }) => theme.fontSize.sm};
  z-index: 2;
`;

export const ProblemUrgencyOption = styled.option`
  display: flex;
  justify-content: center;
  text-align: center;

  padding: 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const ContentWrapper = styled(CounterContentWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
`;

export const ContentTextarea = styled.textarea`
  width: 90%;
  height: 90%;

  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const AddImgBtn = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  height: 3rem;

  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: inherit;
  border-radius: 3px;
  border: 1px solid black;
`;
export const AdditionalWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 17rem;
  height: 3rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: inherit;

  border-radius: 3px;
  border: 1px solid black;
  margin-top: 1rem;
`;

export const SMSImg = styled(SMS)`
  width: 1.5rem;
  height: 1.5rem;
`;
export const PhoneImg = styled(Phone)`
  width: 1.5rem;
  height: 1.5rem;
`;
export const AddCircleImg = styled(AddCircle)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const AdditionalInput = styled.input`
  width: 12rem;
  height: 2rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  /* font-weight: ${({ theme }) => theme.fontBold.bold}; */
  padding: 0 0.5rem;

  border-radius: 3px;
`;
