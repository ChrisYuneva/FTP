import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import App from './app/App';
import { GamePage } from './pages/gamePage';
import { MainPage } from './pages/mainPage';
import { NotFoundPage } from './pages/notFoundPage';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { THEME } from './utils/muiTheme';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/game/:id',
      element: <GamePage />,
    },
  ],
  {
    basename: '/FTP',
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={THEME}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App>
          <CssBaseline />
          <RouterProvider router={router} />
        </App>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
