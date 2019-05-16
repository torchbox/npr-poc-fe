import {
  PAGES_API_URL,
  PAGES_PREVIEW_API_URL,
  PAGE_TYPE_EPISODE,
  PAGE_TYPE_SHOW
} from "../common/consts";

/**
 * Episdodes
 */

const fetchEpisodeWithSlug = slug =>
  fetch(`${PAGES_API_URL}/?type=${PAGE_TYPE_EPISODE}&slug=${slug}&fields=description,season_number,title,subtitle,enclosures,images&limit=1`)
    .then(resp => resp.json())
    .then(resp => resp.items[0]);

const fetchEpisodesByParentId = (id, limit = false) =>
  fetch(
    `${PAGES_API_URL}/?type=${PAGE_TYPE_EPISODE}&child_of=${id}&fields=id,images,season_number,title,date_created,subtitle,enclosures${
      limit ? "&limit=20" : ""
    }`
  )
    .then(resp => resp.json())
    .then(resp => resp.items);

/**
 * Shows
 */

const fetchShowWithSlug = slug =>
  fetch(`${PAGES_API_URL}/?type=${PAGE_TYPE_SHOW}&slug=${slug}&fields=title,subtitle&limit=1`)
    .then(resp => resp.json())
    .then(resp => resp.items[0]);

const fetchShows = () =>
  fetch(`${PAGES_API_URL}?type=${PAGE_TYPE_SHOW}&fields=id,images,title,subtitle`)
    .then(resp => resp.json())
    .then(resp => resp.items);

/**
 * Preview
 */

const fetchPagePreview = decodedString =>
  fetch(`${PAGES_PREVIEW_API_URL}/?${decodedString}&format=json`)
    .then(resp => resp.json())
    .then(resp => resp);


export {
  fetchPagePreview,
  fetchShows,
  fetchShowWithSlug,
  fetchEpisodeWithSlug,
  fetchEpisodesByParentId
};
