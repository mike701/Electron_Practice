import React from "react";
import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer-nav/footer";
import Nav from "../footer-nav/nav";
import "./Layout.css";
import { useContext } from "react";
import { pageContext } from "../../App";
import { useEffect, useState } from "react";
const Layout = (): JSX.Element => {
  
  const page = useContext(pageContext);
  
  return (
    <div id="main">
      <Nav/>
      <MainPage />
      <Footer />
    </div>
  );
}
export default Layout