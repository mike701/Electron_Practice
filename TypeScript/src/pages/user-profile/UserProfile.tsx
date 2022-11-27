import React, { useContext } from "react";
import ProfileDataDisplay from "../../components/user-profile-components/ProfileDataDisplay";
import { pageContext } from "../../App";

export default function UserProfile() {
  const page = useContext(pageContext);

  return (
    <>
      <div>UserProfile</div>
      <ProfileDataDisplay />
      <button
        onClick={() => {
          page?.setPageNumber(1);
          localStorage.setItem("pageId", "1");
        }}
      >
        click to change page :D
      </button>
    </>
  );
}
