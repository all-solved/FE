import React, { useState } from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
`;

const CheckboxBox = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid black;
  background-color: white;
  /* transition: border-color 0.3s, background-color 0.3s; */
`;

const CheckboxLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  color: black;
  opacity: ${({ checked }) => (checked ? 1 : 0)};
  transition: opacity 0.3s;
`;

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <CheckboxBox checked={isChecked} />
      <CheckboxLabel checked={isChecked}>V</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
