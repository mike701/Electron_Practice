import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState, Dispatch, SetStateAction, createContext } from "react";
import { initializePage } from "./services/pageInitService";

import Layout from "./ux-elements/Layout/Layout";

interface pageContextInterface {
  pageNumber: number,
  setPageNumber?: Dispatch<SetStateAction<number | null | undefined>> 
}

export const pageContext = createContext<pageContextInterface | null>(null);

function createPageContext(pageNum, setPageNum) {
  // const [pageNum, setPageNum] = useState<number | null | undefined>(1);
  if (localStorage.getItem("pageId")) {
    setPageNum(localStorage.getItem("pageId"));
  } else {
    setPageNum(1);
    localStorage.setItem("pageId", '1');
  }

  let samplePageContext: pageContextInterface;

  return samplePageContext = {
    pageNumber: 1,
    setPageNumber: setPageNum
  };
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageNum, setPageNum] = useState<number | null | undefined>();
  const samplePageContext:pageContextInterface = useMemo(()=>createPageContext(pageNum, setPageNum), [pageNum]);
  return (
    <div className="App">
      <Routes>
        <Route path="/main_window" element={
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
