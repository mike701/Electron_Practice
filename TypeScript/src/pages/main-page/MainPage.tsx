import React from "react";
import FeedPage from "../feed-page/FeedPage";
import FourOFour from "../error-message/FourOFour";
import InvalidValidIndentifierPage from "../error-message/InvalidValidIdentifierPage";
import SettingsPage from "../settings/SettingsPage";
import UserProfile from "../user-profile/UserProfile";
import DefaultPage from "../default-page/DefaultPage";
import { useEffect } from "react";

export default function MainPage(): JSX.Element {
  const pageRoute: number = +localStorage.getItem("pageId");
  useEffect(() => {
    console.log("running");
  }, [pageRoute]);

  switch (pageRoute) {
    case 0:
      return <FourOFour />;
    case 1:
      return <DefaultPage />;
    case 2:
      return <UserProfile />;
    case 3:
      return <SettingsPage />;
    case 4:
      return <FeedPage />;
    default:
      return <InvalidValidIndentifierPage />;
  }
}
