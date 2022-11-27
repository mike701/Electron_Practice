import React, { useState } from "react";
import { MainPage } from "../../pages/main-page/MainPage";
import Footer from "../footer-nav/footer";
import Nav from "../footer-nav/nav";
import "./Layout.css";

const Layout = (): JSX.Element => {
  const [refresh, setRefresh] = useState<boolean>(false);

  return (
    <div id="main">
      <Nav setRefresh={setRefresh} />
      <MainPage />
      <Footer />
    </div>
  );
};
export default Layout;
