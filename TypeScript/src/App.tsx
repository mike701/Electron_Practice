import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { initializePage } from "./services/pageInitService";
import { Dispatch, SetStateAction } from "react";

// import { PageIdentity } from "./models/pageIdentiy.model";
import usePageIdentity from "./hooks/usePageIndentity";
import Layout from "./ux-elements/Layout/Layout";
interface pageContextInterface {
  pageNumber: number;
  setPageNumber?: Dispatch<SetStateAction<number>> | undefined;
}

export const pageContext = createContext<pageContextInterface>({
  pageNumber: 1,
});

function App() {
  const { setPageIdentifier } = usePageIdentity();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageNum, setPageNum] = useState<number>(1);
  console.log(`The current page ID is ${localStorage.getItem("pageId")}`);

  useEffect(() => {
    initializePage(
      { pageRoute: parseInt(localStorage.getItem("pageId")) },
      setPageIdentifier
    );
  }, []);

  const samplePageContext: pageContextInterface = {
    pageNumber: 1,
    setPageNumber: setPageNum,
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/main_window"
          element={
            <pageContext.Provider value={samplePageContext}>
              <Layout />
            </pageContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
