import Layout from "@ui/Layout";
import Edit from "@pages/Edit";
import Home from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
    ],
  },
]);

export default routes;
