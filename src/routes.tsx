import Home from "@pages/Home";
import ErrorPage from "@pages/ErrorPage";
import React from "react";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
