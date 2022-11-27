import { useState } from "react";
import { PageIdentity } from "../models/pageIdentiy.model";
import { Observable } from "rxjs";

export default function usePageIdentity() {
  const [pageIdentifier, setPageIdentifier] = useState<PageIdentity>({
    pageRoute: 0,
  });
  console.log("the current page id is", pageIdentifier.pageRoute);
  return { pageIdentifier, setPageIdentifier };
}
