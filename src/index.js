import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './dataContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
      <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);
