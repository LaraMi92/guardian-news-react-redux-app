import { NEWS_OBTAINED } from './actions';

const initialState = {
  news: [
    {
      id: '',
      title: '',
      url: '',
    },

  ],

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

    default:
      return { ...oldState };
  }
}

export default reducer;
