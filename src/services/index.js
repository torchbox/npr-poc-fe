import { PAGES_API_URL, PAGES_PREVIEW_API_URL } from "../common/consts";

const fetchPage = id =>
  fetch(`${PAGES_API_URL}/${id}`)
    .then(resp => resp.json())
    .then(resp => resp);

const fetchPagePreview = decodedString =>
    fetch(`${PAGES_PREVIEW_API_URL}/?${decodedString}&format=json`)
      .then(resp => resp.json())
      .then(resp => resp);

const fetchPages = () =>
  fetch(`${PAGES_API_URL}/`)
    .then(resp => resp.json())
    .then(resp => resp);

export { fetchPage, fetchPagePreview, fetchPages };
