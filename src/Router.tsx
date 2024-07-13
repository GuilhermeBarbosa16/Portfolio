// src/Router.tsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from './Pages/layout/Header';
import Home from './Pages/app/';
import Sobre from './Pages/app/Sobre';
import Projects from './Pages/app/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children:[ {path: "/", element: <Home /> } ]
  },
  {
    path: '/',
    element: <Header />,
    children:[ {path: "/Sobre", element: <Sobre /> } ]
  },
  {
    path: '/',
    element: <Header />,
    children:[ {path: "/Projects", element: <Projects /> } ]
  },

])


export { router };
