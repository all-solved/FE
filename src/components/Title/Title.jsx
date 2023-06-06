import React from "react";
import { TitleWrapper, HeadText, SubText } from "./Title.style";

const Title = ({ mainText }) => {
  return (
    <TitleWrapper>
      <HeadText>{mainText}</HeadText>
    </TitleWrapper>
  );
};

export default Title;
