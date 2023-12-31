import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'animate.css';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import storeConfigure from './redux/storeConfigure';
import { Constants, Utils } from './utils';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { store, persistor } = storeConfigure();

if (process.env.REACT_APP_ENVIRONMENT === Constants.ENUM_ENVIRONMENT.STAGING || process.env.REACT_APP_ENVIRONMENT === Constants.ENUM_ENVIRONMENT.PRODUCTION) {
  Utils.disableAllConsoleSystemWide();
  disableReactDevTools();
}

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
