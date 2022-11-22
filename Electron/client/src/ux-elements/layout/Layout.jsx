import MainPage from "../../pages/main-page/MainPage";
import Nav from "../footer-nav/Nav";
import Footer from "../footer-nav/Footer";

export default function Layout(props) {
  return (
    <>
      <Nav />
      <MainPage
        pageIntentifier={props.pageIntentifier}
        setPageIndentifier={props.setPageIndentifier}
      />
      <Footer />
    </>
  );
}
