import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './scss/index.scss';
import { App } from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { router } from './router';
import { CircleLoader } from 'react-spinners';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={router}
    fallbackElement={
      <CircleLoader
        color="#1a71f4"
        cssOverride={{
          display: 'block',
          margin: '10% auto'
        }}
        size="100px"
      />
    }
  >
    <App />
  </RouterProvider>
);

reportWebVitals();
