import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppProvider } from './components/AppContext';
import { CurrentUserProvider } from './components/CurrentUserContext';


ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
    <AppProvider>
    <App />
    </AppProvider>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

