import { PAGES_API_URL } from '../common/consts';

const fetchPage = id =>
  fetch(`${PAGES_API_URL}/${id}`)
    .then(resp => resp.json())
    .then(resp => resp);

export { fetchPage };
