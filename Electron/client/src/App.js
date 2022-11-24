import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./ux-elements/layout/Layout";
import { useState,useEffect} from "react";

function App() {
  let pageId = 1;
  if (window.localStorage.getItem('pageId') !== null) {
    pageId = window.localStorage.getItem('pageId');
  } else {
    window.localStorage.setItem('pageId', pageId);
  }
  const [pageIdentifier, setPageIdentifier] = useState(pageId);
  useEffect(() => {
    window.localStorage.setItem('pageId', pageIdentifier);
  })
  console.log(`The page entity is currently ${pageIdentifier}`);

  //this would be a request to then inject the profile data into our app
  //could be handled by a store like Redux or just simple axios
  const [mockProfile, setMockProfile] = useState({
    user: "Mikey",
    name: "Mike",
    age: 2,
    description: "desc",
    hobbies: ["Hobbies", "Running", "Reading"],
  })

  

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              pageIdentifier={pageIdentifier}
              setPageIdentifier={setPageIdentifier}
              profileData={mockProfile}
              setMockProfile={setMockProfile}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
