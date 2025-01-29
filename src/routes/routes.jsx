import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home.jsx";
import Endpoint from "../components/endpoint.jsx";
import Resources from "../components/resources.jsx";
import Landing from "../components/landing.jsx";

export default function RouterProviderWrapper() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/endpoint/:endpoint",
          element: <Endpoint />,
        },
        {
          path: "/resources",
          element: <Resources />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
