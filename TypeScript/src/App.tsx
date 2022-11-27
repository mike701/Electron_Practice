import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { initializePage } from "./services/pageInitService";
import usePageIdentity from "./hooks/usePageIndentity";
import Layout from "./ux-elements/Layout/Layout";

function App() {
  const { setPageIdentifier } = usePageIdentity();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  console.log(`The current page ID is ${localStorage.getItem("pageId")}`);

  useEffect(() => {
    initializePage(
      { pageRoute: parseInt(localStorage.getItem("pageId")) },
      setPageIdentifier
    );
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/main_window" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
