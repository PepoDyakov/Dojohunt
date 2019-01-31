import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { SwissProvider } from 'swiss-react';

ReactDOM.render(
  <SwissProvider>
    <App />
  </SwissProvider>,
  document.getElementById('root'),
);
