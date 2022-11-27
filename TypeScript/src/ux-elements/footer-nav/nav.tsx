import React, { useContext } from "react";
import "./nav.css";
import { pageContext } from "../../App";
import { initializePage } from "../../services/pageInitService";

export default function Nav() {
  const page = useContext(pageContext);

  return (
    <div id="navBar">
      <button
        onClick={async () => {
          initializePage({ pageRoute: 1 }, page?.setPageNumber);
        }}
      >
        go to home page
      </button>
      <button
        onClick={async () => {
          initializePage({ pageRoute: 2 }, page?.setPageNumber);
        }}
      >
        Go to profile
      </button>
      <button
        onClick={() => {
          initializePage({ pageRoute: 3 }, page?.setPageNumber);
        }}
      >
        Go to settings
      </button>
    </div>
  );
}
