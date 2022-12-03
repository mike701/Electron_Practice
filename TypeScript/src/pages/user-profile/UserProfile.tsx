import React, { useContext } from "react";
import ProfileDataDisplay from "../../components/user-profile-components/ProfileDataDisplay";
import { pageContext } from "../../App";
import { initializePage } from "../../services/pageInitService";
import { PageIdentityEnum } from "../../constants/PageIdentityEnum";

export default function UserProfile() {
  const page = useContext(pageContext);

  return (
    <>
      <div>UserProfile</div>
      <ProfileDataDisplay />
      <button
        onClick={() => {
          initializePage(
            { pageRoute: PageIdentityEnum.DEFAULT_PAGE },
            page?.setPageIdentity
          );
        }}
      >
        click to change page :D
      </button>
    </>
  );
}
