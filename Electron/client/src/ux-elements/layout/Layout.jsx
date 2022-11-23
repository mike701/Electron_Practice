import MainPage from "../../pages/main-page/MainPage";
import Nav from "../footer-nav/Nav";
import Footer from "../footer-nav/Footer";
import "./Layout.css"
export default function Layout(props) {
  return (
    <div id="main">
      <Nav setPageIndentifier={props.setPageIndentifier} />
      <MainPage
        pageIntentifier={props.pageIntentifier}
        profileData={props.profileData}
        setMockProfile={props.setMockProfile}
      />
      <Footer />
    </div>
  );
}
