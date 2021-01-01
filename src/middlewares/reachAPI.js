// call to API
import axios from 'axios';
// actions from store
import { GATHER_NEWS, dataObtained, dataFailed } from 'src/store/actions';
// key to unlock request
import { API_KEY } from '../../config/apiKey';

// dispatch data to connected news container if success, error component if not

const callToData = (store) => (next) => (action) => {
  if (action.type === GATHER_NEWS) {
    axios.get(`https://content.guardianapis.com/search?to-date=${action.query}&format=json&q=fun%20story&api-key=${API_KEY}`)
      .then((response) => store.dispatch(dataObtained(response.data.response.results)))
      .catch((error) => store.dispatch(dataFailed(error)));
  }

  next(action);
};

export default callToData;
