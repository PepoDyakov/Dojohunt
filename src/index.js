import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import { SwissProvider } from 'swiss-react';

ReactDOM.render(
  <SwissProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SwissProvider>,
  document.getElementById('root'),
);
