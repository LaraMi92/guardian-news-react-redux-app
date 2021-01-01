/* eslint-disable object-shorthand */

export const GATHER_NEWS = 'GATHER_NEWS';
export const NEWS_OBTAINED = 'NEWS_OBTAINED';
export const DATA_FAILED = 'DATA_FAILED';

// action creator
// calling API
export const getNews = (value) => ({
  type: GATHER_NEWS,
  query: value,
});

// call to API successful
export const dataObtained = (response) => ({
  type: NEWS_OBTAINED,
  news: response,
});

// no data gathered
export const dataFailed = (error) => ({
  type: DATA_FAILED,
  error: error,
});
