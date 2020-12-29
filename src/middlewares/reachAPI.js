import axios from 'axios';
import { GATHER_NEWS, dataObtained } from 'src/store/actions';

const callToData = (store) => (next) => (action) => {
  if (action.type === GATHER_NEWS) {
    axios.get(`https://content.guardianapis.com/search?to-date=${action.query}&format=json&q=fun%20story&api-key=88b0cf37-4c1a-4076-9a82-f129a48c0703`)
      .then((response) => store.dispatch(dataObtained(response.data.response.results)))
      .catch((error) => console.log('Sorry no news could be fetched', error));
  }

  next(action);
};

export default callToData;
