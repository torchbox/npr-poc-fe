import React, { createContext, useState } from "react";

export const LoaderContext = createContext();

export default ({ children }) => {
  const [pageLoading, setPageLoading] = useState(false);


  return (
    <LoaderContext.Provider
      value={{
        pageLoading,
        setPageLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
