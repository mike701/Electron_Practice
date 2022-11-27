import React from "react";
import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer-nav/footer";
import Nav from "../footer-nav/nav";
import "./Layout.css";
import { useContext } from "react";
import { pageContext } from "../../App";

const Layout = (props: any): JSX.Element => {
  const page = useContext(pageContext);
  console.log("Page Context:", page);
  page?.setPageNumber(2);
  console.log("Page Context:", page);


  const { setRefreshPage } = props;
  return (
    <div id="main">
      <Nav refresh={setRefreshPage}/>
      <MainPage />
      <Footer />
    </div>
  );
}
export default Layout