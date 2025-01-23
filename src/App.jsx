import Footer from "@ui/Footer";
import Header from "@ui/Header";
import Main from "@ui/Main";
import { RouterProvider } from "react-router-dom";
import routes from "@app/routes";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
