// createStore
import { createStore, applyMiddleware } from 'redux';

// devtools redux
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import callToData from 'src/middlewares/reachAPI';

// reducer
import reducer from './reducer';

// store instance
const store = createStore(
  reducer,
  composeWithDevTools(
    // middleware to intercept API call
    applyMiddleware(callToData),
  ),
);

// et on l'exporte
export default store;
