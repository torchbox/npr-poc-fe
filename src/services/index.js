const fetchPage = id =>
  fetch(`/data/fetch-page-${id}.json`)
    .then(resp => resp.json())
    .then(resp => resp);

export { fetchPage };
