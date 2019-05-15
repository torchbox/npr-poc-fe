import {
  PAGES_API_URL,
  PAGES_PREVIEW_API_URL,
  PAGE_TYPE_EPISODE,
  PAGE_TYPE_SHOW
} from "../common/consts";

const fetchPageWithSlug = (slug, type) =>
  fetch(`${PAGES_API_URL}/?type=${type}&slug=${slug}&fields=*`)
    .then(resp => resp.json())
    .then(resp => resp.items[0]);

const fetchEpisodePages = (id, limit = false) =>
  fetch(`${PAGES_API_URL}/?type=${PAGE_TYPE_EPISODE}&child_of=${id}&fields=*${limit ? '&limit=6' : ''}`)
    .then(resp => resp.json())
    .then(resp => resp.items);

const fetchPagePreview = decodedString =>
  fetch(`${PAGES_PREVIEW_API_URL}/?${decodedString}&format=json`)
    .then(resp => resp.json())
    .then(resp => resp);

const fetchShows = () =>
  fetch(`${PAGES_API_URL}?type=${PAGE_TYPE_SHOW}&fields=*`)
    .then(resp => resp.json())
    .then(resp => resp.items);

export {
  fetchPagePreview,
  fetchShows,
  fetchPageWithSlug,
  fetchEpisodePages,
};
