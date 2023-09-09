import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from './routes/pages/root'
import { Home } from './routes/pages/home'
import { DevFest } from './routes/pages/devFest'
import { Sessions } from './routes/pages/sessions'
import { Blog } from './routes/pages/blog'
import { Community } from './routes/pages/community'
import { Notfound } from './routes/pages/404'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Notfound />,
    // loader: rootLoader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "dev-fest",
        element: <DevFest />,
        // loader: teamLoader,
      },
      {
        path: "sessions",
        element: <Sessions />,
        // loader: teamLoader,
      },
      {
        path: "blog",
        element: <Blog />,
        // loader: teamLoader,
      },
      {
        path: "community",
        element: <Community />,
        // loader: teamLoader,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);