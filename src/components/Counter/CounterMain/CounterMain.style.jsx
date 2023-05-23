import styled from "styled-components";

export const CounterMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 97%;
  padding: 2rem;
  background-color: #eeeff7;

  border-radius: 15px;
`;

export const TitleDateWrapper = styled.div`
  display: flex;
  width: 97%;
  gap: 5rem;
`;

export const ContactWrapper = styled.div`
  display: flex;
`;
export const PhoneNumberInput = styled.input`
  width: 45%;
  height: 6.3rem;
  padding: 1rem;
`;

export const CircleInput = styled.input`
  width: ${(props) => (props.width ? `${props.width}%` : `100px`)};
  height: 1.6rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #a3a3a3;
`;

export const ContentsTextarea = styled.textarea`
  width: 90%;
  height: 40rem;
  padding: 2rem;
`;
