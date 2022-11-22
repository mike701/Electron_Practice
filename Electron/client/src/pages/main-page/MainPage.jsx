import DefaultPage from "../default-page/DefaultPage";
import FourOFour from "../error-message/FourOFour";
import InvalidValidIndentifierPage from "../error-message/InvalidValidIdentifierPage";
import UserProfile from "../user-profile/UserProfile";

export default function MainPage(props) {
  const { pageIntentifier, setPageIndentifier } = props;

  if (!pageIntentifier) {
    return <FourOFour />;
  }

  switch (pageIntentifier) {
    case 1:
      return (
        <DefaultPage
          setPageIndentifier={setPageIndentifier}
        />
      );
    case 2:
        return <UserProfile setPageIndentifier={setPageIndentifier}/>
    default:
      return <InvalidValidIndentifierPage />;
  }
}
