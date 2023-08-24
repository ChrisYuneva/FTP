import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { store } from './store/store';
import {Provider} from 'react-redux';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import {MainPage} from "./pages/mainPage";
import {GamePage} from "./pages/gamePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <div>Sorry, page not found</div>,
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
        <Provider store={store}>
            <CssBaseline />
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
