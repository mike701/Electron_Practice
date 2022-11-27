import React from "react";
import { MainPage } from "../../pages/main-page/MainPage";
import Footer from "../footer-nav/footer";
import Nav from "../footer-nav/nav";
import "./Layout.css";
import { useContext } from "react";
import { pageContext } from "../../App";

const Layout = (): JSX.Element => {
  const page = useContext(pageContext);
  console.log("Page Context:", page);
  page?.setPageNumber(2);
  console.log("Page Context:", page);

  return (
    <div id="main">
      <Nav />
      <MainPage />
      <Footer />
    </div>
  );
};
export default Layout;
