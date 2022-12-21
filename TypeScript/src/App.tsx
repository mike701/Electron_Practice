import React, {
  useState,
  useMemo,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { Route, Routes } from "react-router-dom";
import { PageIdentityEnum } from "./constants/PageIdentityEnum";
import { pageContextInterface } from "./models/contextModels.model";
import Layout from "./ux-elements/Layout/Layout";

export const pageContext = createContext<pageContextInterface>({
  pageIdentity: PageIdentityEnum.DEFAULT_PAGE,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPageIdentity: () => {},
});

function createPageContext(
  pageIdentity: PageIdentityEnum,
  setPageIdentity: Dispatch<SetStateAction<PageIdentityEnum>>
) {
  if (pageIdentity !== localStorage.getItem("pageId")) {
    setPageIdentity(pageIdentity);
    localStorage.setItem("pageId", pageIdentity);
  }

  const initialPageContext: pageContextInterface = {
    pageIdentity: PageIdentityEnum.DEFAULT_PAGE,
    setPageIdentity: setPageIdentity,
  };

  return initialPageContext;
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageIdentity, setPageIdentity] = useState<PageIdentityEnum>(
    PageIdentityEnum.DEFAULT_PAGE
  );
  const initialPageContext: pageContextInterface = useMemo(
    () => createPageContext(pageIdentity, setPageIdentity),
    [pageIdentity]
  );

  return (
    <div className="App">
      <Routes>
        <Route
          path="/main_window"
          element={
            <pageContext.Provider value={initialPageContext}>
              <Layout />
            </pageContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
