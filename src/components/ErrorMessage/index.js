// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Homemade Imports
import './errormessage.scss';

// == Composant
const ErrorMessage = ({ error }) => {
  if (error === '') {
    return null;
  } return (
    <div className="news">
      Sorry but we couldn't load that content.
    </div>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};
// == Export
export default ErrorMessage;
