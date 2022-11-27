import React from "react";
const pageContext = React.createContext({});

export const pageProvider = pageContext.Provider;

export default pageContext;