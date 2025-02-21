import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Banner from './Componants/Banner.jsx';
import Portfolio from './Portfolio.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Banner></Banner>
      },
      {
        path: "/about",
        element: <App></App>,
      },
      {
        path: "/service",
        element: <App></App>,
      },
      {
        path: "#port",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/contract",
        // element: <App></App>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
