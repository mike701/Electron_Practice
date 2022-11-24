export default function FeedPage(props) {
  const { setMockProfile } = props;

  const mockProfileDataToChange = {
    user: "Mikey",
    name: "Mike",
    age: 2,
    description: "desc",
    hobbies: ["hobbies", "Running", "Reading"],
  };

  return (
    <>
      <div>Feed</div>

    </>
  );
}
