import React, { useContext } from "react";
import "./nav.css";
import { pageContext } from "../../App";

export default function Nav() {
  const page = useContext(pageContext);

  return (
    <div id="navBar">
      <button
        onClick={async () => {
          page?.setPageNumber(1);
          localStorage.setItem("pageId", "1");
        }}
      >
        go to home page
      </button>
      <button
        onClick={async () => {
          page?.setPageNumber(2);
          localStorage.setItem("pageId", "2");
        }}
      >
        Go to profile
      </button>
      <button
        onClick={() => {
          page?.setPageNumber(3);
          localStorage.setItem("pageId", "3");
        }}
      >
        Go to settings
      </button>
    </div>
  );
}
