import { Dispatch, SetStateAction } from "react";

export interface pageContextInterface {
    pageNumber: number;
    setPageNumber?: Dispatch<SetStateAction<number>> | undefined;
  }
  