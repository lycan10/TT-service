

import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GA4React from 'ga-4-react';

import { initGA, logPageView } from "./constant/analytics"
    

const ga4react = new GA4React('G-757XGDZ579'); // Replace with your GA4 measurement ID

(async () => {
  await ga4react.initialize();

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
})();



logPageView(); // Log initial page view

