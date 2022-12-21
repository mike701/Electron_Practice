import React, { useContext } from "react";
import "./nav.css";
import { pageContext } from "../../App";
import { initializePage } from "../../services/pageInitService";
import { PageIdentityEnum } from "../../constants/PageIdentityEnum";

export default function Nav() {
  const page = useContext(pageContext);

  return (
    <div id="navBar">
      <button
        onClick={async () => {
          initializePage(
            { pageRoute: PageIdentityEnum.DEFAULT_PAGE },
            page.setPageIdentity
          );
        }}
      >
        go to home page
      </button>
      <button
        onClick={async () => {
          initializePage(
            { pageRoute: PageIdentityEnum.PROFILE_PAGE },
            page?.setPageIdentity
          );
        }}
      >
        Go to profile
      </button>
      <button
        onClick={() => {
          initializePage(
            { pageRoute: PageIdentityEnum.SETTINGS_PAGE },
            page?.setPageIdentity
          );
        }}
      >
        Go to settings
      </button>
      <button
        onClick={() => {
          initializePage(
            { pageRoute: PageIdentityEnum.FEED_PAGE },
            page?.setPageIdentity
          );
        }}
      >
        Feed
      </button>
    </div>
  );
}
