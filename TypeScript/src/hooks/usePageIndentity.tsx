import { useState } from "react";
import { PageIdentity } from "../models/pageIdentiy.model";

export default function usePageIdentity() {
    const [pageIdentifier, setPageIdentifier] = useState<PageIdentity>({
        pageRoute: 0,
      });

      return {pageIdentifier, setPageIdentifier}
}