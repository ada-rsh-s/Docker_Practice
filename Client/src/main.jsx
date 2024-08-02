import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import ErrorHandler from './utils/ErrorHandler';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorHandler>
      <App />
    </ErrorHandler>
  </React.StrictMode>
); 
