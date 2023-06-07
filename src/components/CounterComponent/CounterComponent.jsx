import {
  CounterBox,
  CounterDiv,
} from "pages/Counter/CounterSelect/Counter.style";
import propTypes from "prop-types";
import {
  TitleContainer,
  MiddleContainer,
  DivWrapper,
  TitleText,
  TitleInput,
  SubText,
  PeriodWrapper,
  PeriodLabel,
  PeriodRadio,
  ContentContainer,
  ContentTextArea,
  ContentWrapper,
  TermWrapper,
  TermText,
  ButtonWrapper,
  CreateBtn,
  SaveBtn,
  PeriodText,
} from "./CounterComponent.style";
import Title from "components/Title/Title";
import { COMPLAINT_TERMS } from "constants/CounterCreateTerms";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CounterComponent = ({ mainText, create, width }) => {
  const navigate = useNavigate();
  const [counterInfo, setCounterInfo] = useState({
    title: "",
    period: 7,
    contactNum: "",
    contactEmail: "",
    contents: "",
  });

  const { title, period, contactNum, contactEmail, contents } = counterInfo;

  const handleChange = (e) => {
    console.log("눌렀다!");
    console.log(typeof e.target.value);
    if (e.target.name === "period") {
      setCounterInfo({
        ...counterInfo,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setCounterInfo({
        ...counterInfo,
        [e.target.name]: e.target.value,
      });
    }
  };
  useEffect(() => {
    console.log("!" + JSON.stringify(counterInfo));
  }, [counterInfo]);
  const handleSubmit = () => {
    alert("저장 완료");
    console.log(counterInfo);
    // alert(counterInfo);
    navigate("/allso/counter/detail/3");
  };

  return (
    <CounterBox>
      <Title mainText={mainText}></Title>
      <CounterDiv width={width}>
        <DivWrapper>
          <TitleContainer>
            <TitleText>TITLE : </TitleText>
            <TitleInput
              placeholder="소통창구 이름을 입력하세요."
              name="title"
              value={title}
              onChange={handleChange}
            ></TitleInput>
          </TitleContainer>

          <TitleContainer width="40rem">
            <SubText>창구 게시 기간 : </SubText>
            <PeriodWrapper>
              <PeriodLabel value={period}>
                <PeriodRadio
                  type="radio"
                  name="period"
                  value={7}
                  checked={period === 7}
                  onChange={handleChange}
                ></PeriodRadio>
                <PeriodText>7일</PeriodText>

                <PeriodRadio
                  type="radio"
                  name="period"
                  value={15}
                  checked={period === 15}
                  onChange={handleChange}
                ></PeriodRadio>
                <PeriodText>15일</PeriodText>
              </PeriodLabel>
            </PeriodWrapper>
          </TitleContainer>
        </DivWrapper>
        <DivWrapper>
          <MiddleContainer>
            <SubText>관련 부서 연락처 : </SubText>
            <TitleInput
              name="contactNum"
              value={contactNum}
              onChange={handleChange}
            ></TitleInput>
            <SubText>이메일 : </SubText>
            <TitleInput
              name="contactEmail"
              value={contactEmail}
              onChange={handleChange}
            ></TitleInput>
          </MiddleContainer>
        </DivWrapper>
        <DivWrapper>
          <ContentContainer>
            <ContentWrapper>
              <SubText>내용 : </SubText>
              <ContentTextArea
                name="contents"
                value={contents}
                onChange={handleChange}
              ></ContentTextArea>
            </ContentWrapper>
            <TermWrapper>
              {Object.values(COMPLAINT_TERMS).map((term, index) => (
                <TermText key={index}>{term}</TermText>
              ))}
            </TermWrapper>
          </ContentContainer>
        </DivWrapper>

        <ButtonWrapper>
          <SaveBtn>임시 저장</SaveBtn>
          <CreateBtn onClick={handleSubmit}>완료</CreateBtn>
        </ButtonWrapper>
      </CounterDiv>
    </CounterBox>
  );
};

CounterComponent.propTypes = {
  mainText: propTypes.string.isRequired,
};
export default CounterComponent;
