import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./context-api/auth-context";
import { CarHeaderProvider } from './context-api/carContaxt';

import 'antd/dist/reset.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <CarHeaderProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CarHeaderProvider>
  </AuthProvider>
);


