import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../assets/ui/ErrorRoute/ErrorRoute";
import Layout from "../assets/ui/Layout";
import Contact from "../modules/Contact/pages/Contact";
import About from "../modules/About/pages/About";
import Home from "../modules/Home/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
