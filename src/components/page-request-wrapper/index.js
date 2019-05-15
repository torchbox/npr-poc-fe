import React, { Children, useState, useEffect } from "react";

import { PAGE_TYPE_EPISODE, PAGE_TYPE_SHOW } from "../../common/consts";

import { fetchPagePreview, fetchPageWithSlug } from "../../services";

// Makes request to API for page by ID, then renders the child page component
// and passed page data to it

const PageRequestWrapper = ({
  type,
  children,
  preview,
  location: { search: queryParams },
  match: {
    params,
    params: { slug: pageSlug, show: showSlug }
  }
}) => {
  const [data, setData] = useState(null);

  // https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks
  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      // App is in preview mode
      if (preview) {
        let hashes = queryParams.slice(queryParams.indexOf("?") + 1).split("&");

        const decodedString = hashes.reduce((curr, acc) => {
          let [key, val] = curr.split("=");

          const string = `&${key}=${decodeURIComponent(val)}`;

          return key ? `${acc}${string}` : acc;
        }, "");

        const response = await fetchPagePreview(decodedString);

        if (!ignore) setData(response);
      } else {
        let page = await fetchPageWithSlug(pageSlug, type);

        // Get the parent page data if it's an episode
        if (type === PAGE_TYPE_EPISODE) {
          const parent = await fetchPageWithSlug(showSlug, PAGE_TYPE_SHOW);

          page = {
            ...page,
            meta: {
              ...page.meta,
              parent
            }
          };
        }

        if (!ignore) {
          setData(page);
        }
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [preview, queryParams, pageSlug, type, showSlug]);

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
