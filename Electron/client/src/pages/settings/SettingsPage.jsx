export default function SettingsPage(props) {
  const { setMockProfile } = props;

  const mockProfileDataToChange = {
    user: "Mikey",
    name: "Mike",
    age: 2,
    description: "desc",
    hobbies: ["hobbies", "Running", "Reading"],
  };

  const submitForm = (event) => {
    event.preventDefault();
    setMockProfile(mockProfileDataToChange);
  };

  const setValuesToBeChanged = (event) => {
    mockProfileDataToChange[`${event.target.id}`] = event.target.value;
  };

  return (
    <>
      <div>Settings</div>
      <form onSubmit={submitForm}>
        <label>Set user</label>
        <input type="text" id="user" onChange={setValuesToBeChanged} />
        <br />
        <label>Set Name</label>
        <input onChange={setValuesToBeChanged} type="text" id="name" />
        <br />
        <button>save settings</button>
      </form>
    </>
  );
}
