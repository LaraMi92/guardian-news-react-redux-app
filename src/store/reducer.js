import { NEWS_OBTAINED, DATA_FAILED } from './actions';

const initialState = {
  news: [
    {
      id: '',
      title: '',
      url: '',
    },

  ],

  error: '',

};

function reducer(oldState = initialState, action) {
  switch (action.type) {
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

    default:
      return { ...oldState };
  }
}

export default reducer;
