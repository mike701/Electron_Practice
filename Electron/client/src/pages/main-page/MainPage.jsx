import DefaultPage from "../default-page/DefaultPage";
import FeedPage from "../feed-page/FeedPage";
import FourOFour from "../error-message/FourOFour";
import InvalidValidIndentifierPage from "../error-message/InvalidValidIdentifierPage";
import SettingsPage from "../settings/SettingsPage";
import UserProfile from "../user-profile/UserProfile";

export default function MainPage(props) {
  const { pageIdentifier, profileData, setMockProfile } = props;
  switch (parseInt(pageIdentifier)) {
    case undefined | null:
      return <FourOFour />;
    case 1:
      return <DefaultPage />;
    case 2:
      return <UserProfile profileData={profileData} />;
    case 3:
      return <SettingsPage setMockProfile={setMockProfile} />;
    case 4:
      return <FeedPage setMockProfile={setMockProfile} />
    default:
      return <InvalidValidIndentifierPage />;
  }
}
