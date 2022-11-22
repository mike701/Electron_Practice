import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./ux-elements/layout/Layout";
import { useState } from "react";

function App() {
  const [pageIntentifier, setPageIndentifier] = useState(1);
  console.log(`The page intendity is currently ${pageIntentifier}`);

  //this would be a request to then inject the profile data into our app
  //could be handled by a store like Redux or just simple axios
  const mockProfile = {
    user: "Mikey",
    name: "Mike",
    age: 2,
    description: "desc",
    hobbies: "hobbies",
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              pageIntentifier={pageIntentifier}
              setPageIndentifier={setPageIndentifier}
              profileData={mockProfile}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
