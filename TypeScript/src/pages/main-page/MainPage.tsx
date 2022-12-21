import React from "react";
import FeedPage from "../feed-page/FeedPage";
import FourOFour from "../error-message/FourOFour";
import InvalidValidIndentifierPage from "../error-message/InvalidValidIdentifierPage";
import SettingsPage from "../settings/SettingsPage";
import UserProfile from "../user-profile/UserProfile";
import DefaultPage from "../default-page/DefaultPage";
import { PageIdentityEnum } from "../../constants/PageIdentityEnum";
import { z } from "zod";

function MainPage() {
  const PageIdentityEnumType = z.nativeEnum(PageIdentityEnum);
  type PageIdentityEnumType = z.infer<typeof PageIdentityEnumType>;

  switch (PageIdentityEnumType.parse(localStorage.getItem("pageId"))) {
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
