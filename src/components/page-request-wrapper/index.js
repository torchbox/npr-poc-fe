import React, { Children, useState, useEffect } from "react";

import { fetchPage } from "../../services";

// Based on:
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

// Makes request to API for page by ID, then renders the child page component
// and passed page data to it

const PageRequestWrapper = ({
  children,
  match: {
    params: { id: pageId }
  }
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const response = await fetchPage(pageId);

      if (!ignore) setData(response);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [pageId]);

  return (
    <div>
      {data ? (
        <>
          {Children.map(children, child =>
            React.cloneElement(child, { page: data })
          )}
        </>
      ) : (
        <div style={{
          height: '100vh',
        }} />
      )}
    </div>
  );
};

export default PageRequestWrapper;
