import ProfileDataDisplay from "../../components/user-profile-components/ProfileDataDisplay";

export default function UserProfile(props) {
  const { setPageIndentifier, profileData } = props;

  const returnToMainPage = () => {
    setPageIndentifier(1);
  };
  return (
    <>
      <ProfileDataDisplay profileData={profileData} />
      <button onClick={returnToMainPage}>Return to default page</button>
    </>
  );
}
