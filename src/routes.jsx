import Deleted from "@pages/Deleted";
import Edit from "@pages/Edit";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import ErrorFallback from "@ui/ErrorFallback";
import Layout from "@ui/Layout";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
      {
        path: "/deleted",
        element: <Deleted />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
