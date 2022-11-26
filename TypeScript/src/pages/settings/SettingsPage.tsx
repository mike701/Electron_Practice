import React from "react";
export default function SettingsPage() {
  // const mockProfileDataToChange = {
  //   user: "Mikey",
  //   name: "Mike",
  //   age: 2,
  //   description: "desc",
  //   hobbies: ["hobbies", "Running", "Reading"],
  // };

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   setMockProfile(mockProfileDataToChange);
  // };

  // const setValuesToBeChanged = (event) => {
  //   mockProfileDataToChange[`${event.target.id}`] = event.target.value;
  // };

  return (
    <>
      <div>Settings</div>
      <form>
        <label>Set user</label>
        <input type="text" id="user" />
        <br />
        <label>Set Name</label>
        <input type="text" id="name" />
        <br />
        <button>save settings</button>
      </form>
    </>
  );
}
