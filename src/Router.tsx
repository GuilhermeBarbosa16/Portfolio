import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/app";



export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ])
  