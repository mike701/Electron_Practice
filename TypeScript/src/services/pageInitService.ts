import { Dispatch, SetStateAction } from "react";
import { PageIdentityEnum } from "../constants/PageIdentityEnum";
import { PageIdentity } from "../models/pageIdentiy.model";

// eslint-disable-next-line @typescript-eslint/ban-types
export const initializePage = (
  page: PageIdentity,
  setState: Dispatch<SetStateAction<PageIdentityEnum>>
) => {
  if (page.pageRoute === null || page.pageRoute === undefined) {
    localStorage.setItem("pageId", PageIdentityEnum.DEFAULT_PAGE);
    setState(PageIdentityEnum.DEFAULT_PAGE);
  } else {
    localStorage.setItem("pageId", page?.pageRoute);
    setState(page.pageRoute);
  }
};
