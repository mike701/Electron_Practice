import DefaultPage from "../default-page/DefaultPage";
import FourOFour from "../error-message/FourOFour";
import InvalidValidIndentifierPage from "../error-message/InvalidValidIdentifierPage";
import UserProfile from "../user-profile/UserProfile";

export default function MainPage(props) {
  const { pageIntentifier, setPageIndentifier, profileData } = props;

  switch (pageIntentifier) {
    case undefined | null:
      return <FourOFour />;
    case 1:
      return <DefaultPage setPageIndentifier={setPageIndentifier} />;
    case 2:
      return (
        <UserProfile
          setPageIndentifier={setPageIndentifier}
          profileData={profileData}
        />
      );
    default:
      return <InvalidValidIndentifierPage />;
  }
}
