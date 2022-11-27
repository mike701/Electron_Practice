import React, { useContext } from "react";
import ProfileDataDisplay from "../../components/user-profile-components/ProfileDataDisplay";
import { pageContext } from "../../App";
import usePageIdentity from "../../hooks/usePageIndentity";
import { initializePage } from "../../services/pageInitService";

export default function UserProfile() {
  const { setPageIdentifier } = usePageIdentity();
  const page = useContext(pageContext);

  return (
    <>
      <div>UserProfile</div>
      <ProfileDataDisplay />
      <button
        onClick={() => {
          page.setPageNumber(1);
          initializePage({ pageRoute: 1 }, setPageIdentifier);
        }}
      >
        click to change page :D
      </button>
    </>
  );
}
