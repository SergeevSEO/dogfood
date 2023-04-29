import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import { Catalog } from './pages/Catalog';
import { CurrentProduct } from './pages/CurrentProduct';
import { SignIn } from './pages/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "catalog",
        element: <Catalog />
      },
      {
        path: "catalog/:idOfProduct",
        element: <CurrentProduct />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

