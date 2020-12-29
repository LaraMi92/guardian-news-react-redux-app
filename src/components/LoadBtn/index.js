// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import './LoadBtn.scss';

// == Composant
const LoadBtn = ({ getNews }) => {
  const loadNews = (event) => {
    event.preventDefault();
    getNews(event.target.value);
  };

  const years = ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'];

  return (
    <div className="loading">
      {years.map((value, index) => (
        <button key={index} type="button" className="btn btn-outline-dark loadingBtn" onClick={loadNews} value={value}>{value}</button>
      ))}
    </div>
  );
};

LoadBtn.propTypes = {
  getNews: PropTypes.func.isRequired,
};
// == Export
export default LoadBtn;
