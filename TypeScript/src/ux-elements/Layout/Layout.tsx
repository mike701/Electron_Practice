import React from "react";
import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer-nav/footer";
import Nav from "../footer-nav/nav";
import "./Layout.css"

export default function Layout(props) {
  
  return (
      <div id='main'>
        <Nav setPageIdentifier={props.setPageIdentifier} />
      <MainPage
      pageIdentifier={props.pageIdentifier}
      profileData={props.profileData}
      setMockProfile={props.setMockProfile}
      />
        <Footer />
      </div>
  );
}