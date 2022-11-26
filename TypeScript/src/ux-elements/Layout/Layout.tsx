import React from "react";
import { PageIdentity } from "../../models/pageIdentiy.model";
import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer-nav/footer";
import Nav from "../footer-nav/nav";
import "./Layout.css";

const Layout = (props: any): JSX.Element => {
  const {setRefreshPage} = props
  return (
    <div id="main">
      <Nav refresh={setRefreshPage}/>
      <MainPage />
      <Footer />
    </div>
  );
}
export default Layout