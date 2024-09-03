import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyProvider } from './components/mycontext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MyProvider>
);
