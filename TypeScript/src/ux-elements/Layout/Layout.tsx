import React from "react";
import { PageIdentity } from "../../models/pageIdentiy.model";
import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer-nav/footer";
import Nav from "../footer-nav/nav";
<<<<<<< HEAD
import "./Layout.css";

const Layout = (props: any): JSX.Element => {
  const {setRefreshPage} = props
  return (
    <div id="main">
      <Nav refresh={setRefreshPage}/>
      <MainPage />
      <Footer />
    </div>
=======
import "./Layout.css"
interface ExampleMainProps{
  pageIdentifier: number,
  profileData: string,
  setPageIdentifier: React.FC,
  setMockProfile: any
}
export default function Layout(props:PageIdentity): JSX.Element{
  console.log(props)
  return (
      <div id='main'>
        <Nav setPageIdentifier={props.setPageIdentifier} />
        <MainPage
        pageIdentifier={props.pageIdentifier !== undefined? props.pageIdentifier:1}
        profileData={props?.profileData}
        setMockProfile={props?.setMockProfile}
        setPageIdentifier={ props.setPageIdentifier}
        />
        <Footer />
      </div>
>>>>>>> 13b02c1 (types hell)
  );
}
export default Layout