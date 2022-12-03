import React from "react";
import FeedPage from "../feed-page/FeedPage";
import FourOFour from "../error-message/FourOFour";
import InvalidValidIndentifierPage from "../error-message/InvalidValidIdentifierPage";
import SettingsPage from "../settings/SettingsPage";
import UserProfile from "../user-profile/UserProfile";
import DefaultPage from "../default-page/DefaultPage";
import { PageIdentityEnum } from "../../constants/PageIdentityEnum";

function MainPage() {
  const pageRoute: PageIdentityEnum = localStorage.getItem(
    "pageId"
    // going to keep the casting here for now. Moving forward we should find a solution to move away from local storage to get rid of this casting.
  ) as PageIdentityEnum;

  switch (pageRoute) {
    case "four_o_four":
      return <FourOFour />;
    case "default_page":
      return <DefaultPage />;
    case "profile_page":
      return <UserProfile />;
    case "settings_page":
      return <SettingsPage />;
    case "feed_page":
      return <FeedPage />;
    default:
      return <InvalidValidIndentifierPage />;
  }
}

export { MainPage };
