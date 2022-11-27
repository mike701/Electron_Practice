// eslint-disable-next-line import/no-unresolved
import React, { useContext } from "react";
import "./nav.css";
import usePageIdentity from "../../hooks/usePageIndentity";
import { initializePage } from "../../services/pageInitService";
import { PageIdentity } from "../../models/pageIdentiy.model";
import { pageContext } from "../../App";

export default function Nav() {
  const page = useContext(pageContext);

  const { setPageIdentifier } = usePageIdentity();

  const changePageId = (id: PageIdentity) => {
    initializePage(id, setPageIdentifier);
    page.setPageNumber(id.pageRoute);
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
