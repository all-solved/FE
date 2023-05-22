import React from "react";
import styled from "styled-components";
import Header from "../../containers/Header/Header";
import Navbar from "../../containers/Navbar/Navbar";

const PageLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header></Header>
      {children}
      <Navbar></Navbar>
    </div>
  );
};

export default PageLayout;
