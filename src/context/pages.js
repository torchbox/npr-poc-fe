import React, { createContext, useState, useEffect } from "react";

import { fetchPages, fetchPage } from "../services";

export const PagesContext = createContext();

// Based on:
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

export default ({ children }) => {
  const [pages, setPages] = useState(null);
  const [episodes, setEpisodes] = useState(null);

  // Get and set all pages
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

  // Get and set all episodes
  // When pages have been set
  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      // Filter for pages that are podcast episodes
      const episodes = pages.filter(page => {
        return page.meta.type === "podcasts.Episode";
      });

      const allEpisodeData = await Promise.all(
        episodes.map(child => fetchPage(child.id))
      );

      if (!ignore) setEpisodes(allEpisodeData);
    }

    if (pages) {
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, [pages]);

  return (
    <PagesContext.Provider
      value={{
        pages,
        episodes,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
