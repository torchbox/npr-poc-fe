import React, { Children, useState, useEffect, useContext } from "react";

import { PagesContext } from "../../context/pages";

import { fetchPage } from "../../services";

// Based on:
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

// Makes request to API for page by ID, then renders the child page component
// and passed page data to it

const PageRequestWrapper = ({
  children,
  match: {
    params,
    params: { slug: pageSlug }
  }
}) => {
  const [data, setData] = useState(null);
  const { pages } = useContext(PagesContext);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (pages !== null) {
        const [page] = pages.filter(page => page.meta.slug === pageSlug);
        const response = await fetchPage(page.id);
        if (!ignore) setData(response);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [pageSlug, pages]);

  return (
    <div>
      {data ? (
        <>
          {Children.map(children, child =>
            React.cloneElement(child, { page: data })
          )}
        </>
      ) : (
        <div
          style={{
            height: "100vh"
          }}
        />
      )}
    </div>
  );
};

export default PageRequestWrapper;
