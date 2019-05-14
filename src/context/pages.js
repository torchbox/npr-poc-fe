import React, { createContext, useState, useEffect } from "react";

import { fetchPages, fetchPage } from "../services";

export const PagesContext = createContext();

// Based on:
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

export default ({ children }) => {
  const [pages, setPages] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [shows, setShows] = useState(null);

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

      // Filter for pages that are shows
      const shows = pages.filter(page => {
        return page.meta.type === "podcasts.Show";
      });

      // Request full page data for each episode
      const allEpisodeData = await Promise.all(
        episodes.map(child => fetchPage(child.id))
      );

      // Request full page data for each show
      const allShowsData = await Promise.all(
        shows.map(child => fetchPage(child.id))
      );

      if (!ignore) {
        setEpisodes(allEpisodeData);
        setShows(allShowsData);
      }
    }

    if (pages) {
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, [pages]);

  console.log({
    pages,
    episodes,
    shows
  });

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
