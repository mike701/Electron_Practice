// eslint-disable-next-line import/no-unresolved
import React,{ useContext } from "react";
import "./Nav.css";
import { pageContext } from "../../App";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Nav() {
  const page = useContext(pageContext);

  return (
    <div id="navBar">
      <button
        onClick={async () => {
          page.setPageNumber(1) 
          localStorage.setItem('pageId', '1');
          // changePageId({ pageRoute: page.pageNumber });
        }}
      >
        go to home page
      </button>
      <button
        onClick={async () => {
          page?.setPageNumber(2);
          await localStorage.setItem('pageId', '2');
          // changePageId({ pageRoute: page.pageNumber });
        }}
      >
        Go to profile
      </button>
      <button
        onClick={() => {
          page?.setPageNumber(3);
          localStorage.setItem('pageId', '3');
          // changePageId({ pageRoute: page.pageNumber });
        }}
      >
        Go to settings
      </button>
    </div>
  );
}
