export default function UserProfile(props) {
  const { setPageIndentifier } = props;

  const returnToMainPage = () => {
    setPageIndentifier(1);
  };
  return (
    <>
      <div>This is a too be user profile</div>
      <button onClick={returnToMainPage}>Return to default page</button>
    </>
  );
}
