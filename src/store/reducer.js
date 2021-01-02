import {
  NEWS_OBTAINED, DATA_FAILED, GATHER_NEWS, SCROLL_NEWS, LOAD_MORE,
} from './actions';

const initialState = {
  news: [
    {
      id: '',
      title: '',
      url: '',
    },

  ],
  query: '',
  error: '',
  page: 2,
};

function reducer(oldState = initialState, action) {
  switch (action.type) {
    case GATHER_NEWS: {
      console.log('the date value is', action.query);
      return {
        ...oldState,
        query: action.query,
      };
    }
    case NEWS_OBTAINED: {
      console.log('reacting to news_obtained action', action.news);

      return {
        ...oldState,
        news: [
          ...action.news,
        ],
      };
    }

    case DATA_FAILED: {
      console.log('havent fetched data', action.error);
      return {
        ...oldState,
        error: action.error,
      };
    }

    case LOAD_MORE: {
      console.log('increment page, number', action.page);
      return {
        ...oldState,
        page: oldState.page + 1,
      };
    }

    case SCROLL_NEWS: {
      return {
        ...oldState,
        news: [
          ...oldState.news,
          ...action.news,
        ],
      };
    }

    default:
      return { ...oldState };
  }
}

export default reducer;
