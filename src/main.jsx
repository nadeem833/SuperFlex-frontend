import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.jsx';
import './i18n.js';
import './index.css';
import { persistor, store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route
        path="/*"
        element={
          <Provider store={store}>
            <Suspense fallback="loading">
              <PersistGate loading={null} persistor={persistor}>
                <App />
              </PersistGate>
            </Suspense>
          </Provider>
        }
      />
    </Routes>
  </BrowserRouter>
  // {/* </React.StrictMode> */}
);
