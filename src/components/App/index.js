// == Import npm
import React from 'react';

// == Homemade Imports
import './styles.scss';
import News from 'src/containers/News';
import LoadBtn from 'src/containers/LoadBtn';
import ErrorMessage from 'src/containers/ErrorMessage';

// == Composant
const App = () => (
  <div className="app">
    <LoadBtn />
    <News />
    <ErrorMessage />
  </div>
);

// == Export
export default App;
