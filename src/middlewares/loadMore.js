// call to API
import axios from 'axios';
// actions from store
import { LOAD_MORE, dataAfterScroll, dataFailed } from 'src/store/actions';
// key to unlock request
import { API_KEY } from './apiKey';

// load more data by incrementing the page and launching new request with date value kept in store

const loadMoreData = (store) => (next) => (action) => {
  if (action.type === LOAD_MORE) {
    const { query, page } = store.getState();
    axios.get(`https://content.guardianapis.com/search?to-date=${query}&format=json&q=fun%20story&api-key=${API_KEY}&page=${page}`)
      .then((response) => store.dispatch(dataAfterScroll(response.data.response.results)))
      .catch((error) => store.dispatch(dataFailed(error)));
  }

  next(action);
};

export default loadMoreData;
