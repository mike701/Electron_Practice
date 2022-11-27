import ProfileDataDisplay from "../../components/user-profile-components/ProfileDataDisplay";

export default function UserProfile(props) {
  const { profileData } = props;

  return (
    <>
      <ProfileDataDisplay profileData={profileData} />
    </>
  );
}
