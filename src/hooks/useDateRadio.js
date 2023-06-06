import { useState } from "react";
export const useDateRadio = (initialValue) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return [selectedValue, handleRadioChange];
};
