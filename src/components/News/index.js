// == Import npm
import React from 'react';
// package to enable infinite scroll
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

// == Import
import './news.scss';
import PropTypes from 'prop-types';

// == Composant
const News = ({ news, infiniteScroll }) => {
  useBottomScrollListener(infiniteScroll);
  return (
    <div className="news-container">
      <div className="news">
        {news.map((oneNews) => (
          <div key={oneNews.id} className="one-news">
            {oneNews.webTitle
        && (
        <div className="one-news__title">
          {oneNews.webTitle}
        </div>
        )}
            {oneNews.sectionName && <span className="badge">{oneNews.sectionName} </span>}
            <div className="one-news__url">
              {oneNews.webUrl && <a target="_blank" className="one-news__url" href={oneNews.webUrl}> <i className="fas fa-external-link-alt" /> </a>}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  infiniteScroll: PropTypes.func.isRequired,
};

// == Export
export default News;
