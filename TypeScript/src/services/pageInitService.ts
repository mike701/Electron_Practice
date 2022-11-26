import { Dispatch } from "react";
import { PageIdentity } from "../models/pageIdentiy.model";

// eslint-disable-next-line @typescript-eslint/ban-types
export const initializePage = (
  page: PageIdentity,
  setState: Dispatch<PageIdentity>
) => {
  if (
    page?.pageRoute === 0 ||
    page.pageRoute === undefined ||
    page.pageRoute === null ||
    isNaN(page.pageRoute)
  ) {
    localStorage.setItem("pageId", "1");
    setState({ pageRoute: 1 });
  } else {
    localStorage.setItem("pageId", page?.pageRoute.toString());
    setState({ pageRoute: page?.pageRoute });
  }
};
