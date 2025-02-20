import Deleted from "@pages/Deleted";
import Edit from "@pages/Edit";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Test from "@pages/Test";
import ErrorFallback from "@ui/ErrorFallback";
import Layout from "@ui/Layout";
import ProtectedRoute from "@ui/ProtectedRoute";
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
        path: "/test",
        element: <Test />,
      },
      {
        path: "/protected",
        element: (
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
