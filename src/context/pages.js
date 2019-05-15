import React, { createContext, useState } from "react";

export const PagesContext = createContext();

export default ({ children }) => {
  const [cache, setCache] = useState({});

  const updateCache = (object) => {
    setCache({...cache, ...object});
  }

  return (
    <PagesContext.Provider
      value={{
        cache,
        updateCache
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
