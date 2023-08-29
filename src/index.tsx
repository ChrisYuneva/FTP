import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { store, persistor } from './store/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import {MainPage} from "./pages/mainPage";
import {GamePage} from "./pages/gamePage";
import App from "./app/App";
import {ThemeProvider} from "@mui/material";
import {THEME} from "./utils/muiTheme";
import {NotFoundPage} from "./pages/notFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/game/:id",
        element: <GamePage />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={ THEME }>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App>
                        <CssBaseline />
                        <RouterProvider router={router}/>
                    </App>
                </PersistGate>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
