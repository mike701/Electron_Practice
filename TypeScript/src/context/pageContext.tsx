import { createContext } from "react";
import { PageIdentityEnum } from "../constants/PageIdentityEnum";
import { pageContextInterface } from "../models/contextModels.model";

export const pageContext = createContext<pageContextInterface>({
  pageIdentity: PageIdentityEnum.DEFAULT_PAGE,
});
  