import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import { AppProvider } from './hooks/context'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
