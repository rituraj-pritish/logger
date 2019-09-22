import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducers';
import App from './App';

const middleWares = [reduxThunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
