import React, {
  useState,
  useMemo,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { Route, Routes } from "react-router-dom";
import { pageContextInterface } from "./models/contextModels.model";
import Layout from "./ux-elements/Layout/Layout";

export const pageContext = createContext<pageContextInterface | null>(null);

function createPageContext(
  pageNum: number,
  setPageNum: Dispatch<SetStateAction<number>>
) {
  if (pageNum.toString() !== localStorage.getItem("pageId")) {
    setPageNum(pageNum);
    localStorage.setItem("pageId", pageNum.toString());
  }

  const samplePageContext: pageContextInterface = {
    pageNumber: 1,
    setPageNumber: setPageNum,
  };

  return samplePageContext;
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageNum, setPageNum] = useState<number | null | undefined>();
  const samplePageContext: pageContextInterface = useMemo(
    () => createPageContext(pageNum, setPageNum),
    [pageNum]
  );
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
