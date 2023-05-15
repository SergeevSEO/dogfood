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
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { SignUp } from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "about-me",
        element: <AboutMe />
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

