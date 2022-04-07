import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import myStore from './store';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={myStore}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
);

