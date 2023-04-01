import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateContextProvider } from './contexts/StateContextProvider';
import './global.css';

const rootElement = document.getElementById('root');

ReactDom.createRoot(rootElement).render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>
);
