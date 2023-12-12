/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast as toastToastify } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { isNull, lowerCase } from 'lodash';
import toastHot, { Toaster } from 'react-hot-toast';
import { Constants, Images, LocalStorageManager, Utils } from './utils';
import { ProtectedRoute } from './components';
import { Loader } from './components/atoms';
import ErrorPage from './components/pages/ErrorPage';
import PageNotFound from './components/pages/PageNotFound';
import OfflinePage from './components/pages/OfflinePage';
import { NavigationBar } from './components/organisms';
import { useCustomDispatchAction, useOnlineStatus } from './customHooks';
import HardcodedData from './testingStuff/HardcodedData';

const Landing = lazy(() => import('./components/pages/Landing'));

function App() {
  const isOnline = useOnlineStatus();
  const { action_common_is_dark_mode } = useCustomDispatchAction();

  useEffect(() => {
    HardcodedData.app();
    (async () => {
      action_common_is_dark_mode(isNull(LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.IS_DARK_MODE)) ? Utils.isDarkModeEnabledInBrowser() : LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.IS_DARK_MODE));
      // eslint-disable-next-line no-use-before-define
      await initilization();
    })();
    return () => {};
  }, []);

  const initilization = async () => {};

  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Afforai</title>
        <meta name="description" content="Afforai - Research anything with an AI assistant" />
        <link rel="canonical" href="https://afforai.com/" />
      </Helmet>

      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<Loader />}>
          {isOnline ? (
            <>
              <NavigationBar />

              <Routes>
                <Route
                  path={Constants.ENUM_PATH.LANDING}
                  element={
                    <ProtectedRoute>
                      <Landing />
                    </ProtectedRoute>
                  }
                />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </>
          ) : (
            <OfflinePage />
          )}
        </Suspense>
      </ErrorBoundary>
      <ToastContainer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
