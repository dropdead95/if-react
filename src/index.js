import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import AppClass from './components/AppClass/AppClass';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppClass />);

reportWebVitals();
