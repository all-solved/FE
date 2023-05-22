import React from "react";
import styled from "styled-components";
import Header from "../../containers/Header/Header";
import Navbar from "../../containers/Navbar/Navbar";
import { Outlet } from "../../../node_modules/react-router-dom/dist/index";
const PageLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Navbar></Navbar>
    </div>
  );
};

export default PageLayout;
