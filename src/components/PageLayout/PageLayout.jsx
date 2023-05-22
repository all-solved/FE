import React from "react";
import styled from "styled-components";
import Header from "../../containers/Header/Header";
import Navbar from "../../containers/Navbar/Navbar";
import { Outlet } from "../../../node_modules/react-router-dom/dist/index";

const PageLayout = () => {
  return (
    <PageLayoutWrapper>
      <Navbar></Navbar>
      <MainWrapper>
        <Header></Header>
        <Outlet></Outlet>
      </MainWrapper>
    </PageLayoutWrapper>
  );
};

const PageLayoutWrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  margin-left: 25rem;
`;

export default PageLayout;
