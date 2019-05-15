import React, { createContext, useState, useEffect } from "react";

export const PagesContext = createContext();

// Based on:
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

export default ({ children }) => {
  const [pages, setPages] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [shows, setShows] = useState(null);

  // useEffect(() => {
  //   let ignore = false;

  //   async function fetchData() {
  //
  //     if (!ignore) {
  //
  //     }
  //   }

  //   return () => {
  //     ignore = true;
  //   };
  // });

  return (
    <PagesContext.Provider
      value={{
        pages,
        episodes,
        shows
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
