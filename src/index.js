// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == local imports
import App from 'src/components/App';
import store from 'src/store';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);
// Target DOM
const target = document.getElementById('root');

render(rootReactElement, target);
