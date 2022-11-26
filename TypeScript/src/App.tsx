import React from "react"
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { initializePage } from "./services/pageInitService";
<<<<<<< HEAD
import usePageIdentity from "./hooks/usePageIndentity";
import Layout from "./ux-elements/Layout/Layout";

function App() {
  const { setPageIdentifier } = usePageIdentity();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [refreshPage, setRefreshPage] = useState<boolean>(false)
  console.log(`The current page ID is ${localStorage.getItem('pageId')}`);

  useEffect(() => {
    initializePage(
      { pageRoute: parseInt(localStorage?.getItem("pageId")) },
      setPageIdentifier
    );
=======
import { PageIdentity } from "./models/pageIdentiy.model";
import Layout from "./ux-elements/Layout/Layout";

function App() {
  let [page, setPage] = useState <PageIdentity>({ pageRoute: 1, pageIdentifier: 1});
  console.log(`The current page ID is ${page}`);

  useEffect(() => {
    if (localStorage.getItem('pageId') == null) initializePage({ pageRoute: 1 }, setPage);
    else initializePage({ pageRoute: Number(localStorage.getItem('pageId')) }, setPage);
>>>>>>> 13b02c1 (types hell)
  }, []);

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
<<<<<<< HEAD
        <Route path="/main_window" element={<Layout setRefreshPage={setRefreshPage} />} />
=======
        <Route path="/main_window" element={
        <Layout
            pageIdentifier={page.pageIdentifier !== undefined? page.pageIdentifier:1}
            setPageIdentifier={setPage}
            mockProfile={mockProfile}
            setMockProfile={setMockProfile}
            /> 
            } />
>>>>>>> 13b02c1 (types hell)
      </Routes>
    </div>
  );
}

export default App;
