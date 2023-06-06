import styled from "styled-components";
import theme from "styles/theme";

export const CounteDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 110rem;
  height: 83%;
  padding: 5rem 6rem;
  margin: 3.5rem 3rem 0 3rem;

  border-radius: 12px;
  background-color: #eeeff7;
`;
export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100rem; */
  width: 90%;

  margin-bottom: 2.3rem;
`;
export const CounterWrapper = styled.div`
  display: flex;
`;

export const CounterDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${(props) => (props.width ? props.width : "100rem")};
  height: 47rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  /* justify-content: ; */
  align-items: center;
  /*
  width: ${(props) => props.width}; */
  width: 50%;
  height: 4.5rem;
  padding-left: 1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.strokeGrey};
  background-color: ${({ theme }) => theme.colors.white};
`;
export const MiddleContainer = styled(TitleContainer)`
  width: 100%;
`;
export const TitleText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontBold.bold};
`;

export const SubText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontBold.bold};
`;

export const TitleInput = styled.input`
  width: ${(props) => (props.width ? props.width : "22rem")};
  height: 3rem;

  margin-left: 1rem;
  margin-right: 3rem;
  border: none;

  font-size: ${({ theme }) => theme.fontSize.md};

  outline: none; /* 포커스 스타일 제거 */
`;

export const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  width: 12rem;
  margin-left: 1rem;
`;

export const PeriodLabel = styled.label`
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const PeriodRadio = styled.input`
  margin-right: 5px;
`;
export const ContentContainer = styled(TitleContainer)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  padding: 1rem;
  height: 28rem;
  width: 100%;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;
export const TermWrapper = styled.div``;
export const ContentTextArea = styled.textarea`
  /* width: 90rem; */
  width: 90%;
  height: 15rem;
  font-size: ${({ theme }) => theme.fontSize.lg};

  margin-left: 1rem;
  outline: 0;
  resize: none;
`;

export const TermText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontBold.light};
  color: ${({ theme }) => theme.colors.strokeGrey};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15rem;
  gap: 2rem;
`;

export const GeneralBtn = styled.button`
  width: 6.5rem;
  height: 3rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const CreateBtn = styled(GeneralBtn)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainBlue};
`;
export const ExtendBtn = styled(GeneralBtn)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DeleteBtn = styled(GeneralBtn)`
  color: ${({ theme }) => theme.colors.red};
  border: 1px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const QRcodeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 1rem;
  width: 15rem;
  height: 47rem;
`;

export const QRcodeMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.mainBlue};
`;
