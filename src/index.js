import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import allReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const myStore = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={myStore}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
);

