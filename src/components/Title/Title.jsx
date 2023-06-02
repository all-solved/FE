import React from "react";
import { TitleWrapper, HeadText, SubText } from "./Title.style";

const Title = ({ mainText, subText }) => {
  return (
    <TitleWrapper>
      <HeadText>{mainText}</HeadText>
      <SubText>{subText}</SubText>
    </TitleWrapper>
  );
};

export default Title;
