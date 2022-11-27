// eslint-disable-next-line import/no-unresolved
import React from "react";
import "./nav.css";
import usePageIdentity from "../../hooks/usePageIndentity";
import { initializePage } from "../../services/pageInitService";
import { PageIdentity } from "../../models/pageIdentiy.model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Nav({ setRefresh }: any) {
  const { setPageIdentifier } = usePageIdentity();

  const changePageId = (id: PageIdentity) => {
    initializePage(id, setPageIdentifier);
    setRefresh((prev: boolean) => !prev);
  };

  return (
    <div id="navBar">
      <button
        onClick={() => {
          changePageId({ pageRoute: 1 });
        }}
      >
        go to home page
      </button>
      <button
        onClick={() => {
          changePageId({ pageRoute: 2 });
        }}
      >
        Go to profile
      </button>
      <button
        onClick={() => {
          changePageId({ pageRoute: 3 });
        }}
      >
        Go to settings
      </button>
    </div>
  );
}
