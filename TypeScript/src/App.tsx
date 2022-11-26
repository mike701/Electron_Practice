import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./ux-elements/Layout/Layout";
import "./App.css"

function App() {
  let pageId: any;
  pageId  = 1;
  // console.log(typeof pageId);
  if (window.localStorage.getItem('pageId') !== null) {
    pageId = window.localStorage.getItem('pageId');
  } else {
    window.localStorage.setItem('pageId', pageId);
  }
  let [pageIdentifier, setPageIdentifier] = useState(pageId);
  useEffect(() => {
    window.localStorage.setItem('pageId', pageIdentifier);
  })
  console.log(`The page entity is currently ${pageIdentifier}`);
  interface Profile{
    user: string,
    name: string,
    age: number,
    description: string,
    hobbies: string[]
  };
  // let test: Profile;
  // test = "wrong";
  // console.log(test);

  //create local data for testing without backend
  let mockProfile: Profile;
  let setMockProfile;
  [mockProfile, setMockProfile] = useState({
    user: "Mikey",
    name: "Mike",
    age: 2,
    description: "desc",
    hobbies: ["Hobbies", "Running", "Reading"]
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/main_window"
          element={
            <Layout
              pageIdentifier={pageIdentifier}
              setPageIdentifier={setPageIdentifier}
              profileData={mockProfile}
              setMockProfile={setMockProfile}
            >
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;