import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { initializePage } from "./services/pageInitService";
import usePageIdentity from "./hooks/usePageIndentity";
import Layout from "./ux-elements/Layout/Layout";
import { pageContextInterface } from "./models/contextModels.model";

export const pageContext = createContext<pageContextInterface>({
  pageNumber: 1,
});

function App() {
  const { setPageIdentifier } = usePageIdentity();
  const [pageNum, setPageNum] = useState<number>(1);

  console.log(`The current page ID is ${localStorage.getItem("pageId")}`);

  useEffect(() => {
    initializePage(
      { pageRoute: parseInt(localStorage.getItem("pageId")) },
      setPageIdentifier
    );
  }, []);

  const pageContextType: pageContextInterface = {
    pageNumber: pageNum,
    setPageNumber: setPageNum,
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/main_window"
          element={
            <pageContext.Provider value={pageContextType}>
              <Layout />
            </pageContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
