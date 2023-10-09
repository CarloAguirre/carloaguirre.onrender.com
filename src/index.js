import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { PortafolioProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortafolioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PortafolioProvider>
  </React.StrictMode>
);

reportWebVitals();
