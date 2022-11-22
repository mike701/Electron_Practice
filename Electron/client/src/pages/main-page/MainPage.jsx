import DefaultPage from "../default-page/DefaultPage";
import FourOFour from "../error-message/FourOFour";
import InvalidValidIndentifierPage from "../error-message/InvalidValidIdentifierPage";
import SettingsPage from "../settings/SettingsPage";
import UserProfile from "../user-profile/UserProfile";

export default function MainPage(props) {
  const { pageIntentifier, profileData, setMockProfile } = props;

  switch (pageIntentifier) {
    case undefined | null:
      return <FourOFour />;
    case 1:
      return <DefaultPage />;
    case 2:
      return <UserProfile profileData={profileData} />;
    case 3:
      return <SettingsPage setMockProfile={setMockProfile} />;
    default:
      return <InvalidValidIndentifierPage />;
  }
}
