// eslint-disable-next-line import/no-unresolved
import React,{ useContext } from "react";
import "./Nav.css";
import usePageIdentity from "../../hooks/usePageIndentity";
import { initializePage } from "../../services/pageInitService";
import { PageIdentity } from "../../models/pageIdentiy.model";
import { pageContext } from "../../App";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Nav({ refresh }: any) {
  const page = useContext(pageContext);
  console.log("Nav PageContext: ", page);
  
  const { setPageIdentifier } = usePageIdentity();

  const changePageId = (id: PageIdentity) => {
    initializePage(id, setPageIdentifier);
    refresh((prev: boolean) => !prev);
  };

  return (
    <div id="navBar">
      <button
        onClick={() => {
          page.pageNumber = 1;
          changePageId({ pageRoute: 1 });
        }}
      >
        go to home page
      </button>
      <button
        onClick={() => {
          page.pageNumber = 2;
          changePageId({ pageRoute: 2 });
        }}
      >
        Go to profile
      </button>
      <button
        onClick={() => {
          page.pageNumber = 3;
          changePageId({ pageRoute: 3 });
        }}
      >
        Go to settings
      </button>
    </div>
  );
}
