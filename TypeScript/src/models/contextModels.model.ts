import { Dispatch, SetStateAction } from "react";
import { PageIdentityEnum } from "../constants/PageIdentityEnum";

export interface pageContextInterface {
    pageIdentity: PageIdentityEnum;
    setPageIdentity?: Dispatch<SetStateAction<PageIdentityEnum>> | undefined;
  }
  