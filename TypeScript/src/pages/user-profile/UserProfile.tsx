import React, { useContext } from "react";
import ProfileDataDisplay from "../../components/user-profile-components/ProfileDataDisplay";
import { pageContext } from "../../App";
import { initializePage } from "../../services/pageInitService";

export default function UserProfile() {
  const page = useContext(pageContext);

  return (
    <>
      <div>UserProfile</div>
      <ProfileDataDisplay />
      <button
        onClick={() => {
          initializePage({pageRoute: 1}, page?.setPageNumber)
        }}
      >
        click to change page :D
      </button>
    </>
  );
}
