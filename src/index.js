import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reduser';
import App from './App';

const store = createStore(reducer);
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
