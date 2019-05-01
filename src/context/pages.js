import React, { createContext, useState, useEffect } from "react";

import { fetchPages } from "../services";

export const PagesContext = createContext();

// Based on:
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

export default ({ children }) => {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const { items } = await fetchPages();

      if (!ignore && pages === null) setPages(items);
    }

    fetchData();

    return () => {
      ignore = true;
    };
  });

  return (
    <PagesContext.Provider
      value={{
        pages
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
