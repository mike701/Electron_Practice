import React from "react";
import { MainPage } from "../../pages/main-page/MainPage";
import Footer from "../footer-nav/footer";
// eslint-disable-next-line import/namespace, import/default
import Nav from "../footer-nav/nav";
import "./Layout.css";

const Layout = (): JSX.Element => {
  return (
    <div id="main">
      <Nav />
      <MainPage />
      <Footer />
    </div>
  );
};
export default Layout;
