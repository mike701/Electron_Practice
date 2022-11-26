import { Dispatch } from "react"
import { PageIdentity } from "../models/pageIdentiy.model"

// eslint-disable-next-line @typescript-eslint/ban-types
export const initializePage = (page: PageIdentity, setState: Dispatch<PageIdentity>) => {
    localStorage.setItem('pageId', page?.pageRoute.toString())
    setState({pageRoute: page?.pageRoute})
    return page.pageRoute
}