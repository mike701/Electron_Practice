import { createContext } from "react";
import { pageContextInterface } from "../models/contextModels.model";

export const pageContext = createContext<pageContextInterface>({
    pageNumber: 1,
  });
  