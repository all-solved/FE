import styled from "styled-components";
import theme from "styles/theme";

export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100rem; */
  width: 90%;

  margin-bottom: 3rem;
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
  width: ${(props) => (props.width === "110rem" ? "32rem" : "24rem")};
  height: 3rem;

  margin-left: 1rem;
  border: none;

  font-size: ${({ theme }) => theme.fontSize.md};

  outline: none; /* 포커스 스타일 제거 */
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 12rem;
  margin-left: 1rem;
`;
export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 5rem;
`;
export const ContentContainer = styled(TitleContainer)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  padding: 1rem;
  height: 26rem;
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
export const SaveBtn = styled(GeneralBtn)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DeleteBtn = styled(GeneralBtn)`
  color: ${({ theme }) => theme.colors.red};
  border: 1px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
`;
