import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/App';
import appState from './app/appState';

// Create a store instance for the global state, and allow using Redux DevTools
const store = createStore(
  appState,
  window.devToolsExtension && window.devToolsExtension()
);

// Render the app into the DOM
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
