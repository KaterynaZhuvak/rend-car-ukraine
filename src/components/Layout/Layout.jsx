import React from "react";
import Header from "../Header/Header";
import { StyledLayout } from "./Styled";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
