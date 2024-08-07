// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App/App';
import uiReducer from './reducers/uiReducer';

// Create a Redux store that holds the state of your app and applies the thunk middleware.
const store = createStore(uiReducer, applyMiddleware(thunk));

// Render the App component, wrapped with the Provider component to pass the store to the App.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
