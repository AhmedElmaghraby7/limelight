import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Information from "../pages/Information";
import Products from "../pages/Products";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/information",
    element: <App />,
    children: [{ index: true, element: <Information /> }],
  },
  {
    path: "/products",
    element: <App />,
    children: [{ index: true, element: <Products /> }],
  },
  {
    path: "/privacy",
    element: <App />,
    children: [{ index: true, element: <Privacy /> }],
  },
  {
    path: "/contact",
    element: <App />,
    children: [{ index: true, element: <Contact /> }],
  },
]);

export default router;
