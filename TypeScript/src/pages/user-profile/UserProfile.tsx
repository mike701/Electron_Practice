import React from "react";
import ProfileDataDisplay from "../../components/user-profile-components/ProfileDataDisplay";

export default function UserProfile(props) {
  const { setPageIdentifier, profileData } = props;

  const returnToMainPage = () => {
    setPageIdentifier(1);
  };
  return (
    <>
      <ProfileDataDisplay profileData={profileData} />
      <button onClick={returnToMainPage}>Return to default page</button>
    </>
  );
}
