// createStore
import { createStore, applyMiddleware } from 'redux';

// devtools redux
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import callToData from 'src/middlewares/reachAPI';
import loadMoreData from 'src/middlewares/loadMore';

// reducer
import reducer from './reducer';

// store instance
const store = createStore(
  reducer,
  composeWithDevTools(
    // middleware to intercept API call
    applyMiddleware(callToData),
    // middleware to load more on scrolling
    applyMiddleware(loadMoreData),
  ),
);

// et on l'exporte
export default store;
