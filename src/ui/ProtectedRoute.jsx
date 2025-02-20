import Forbidden from "@pages/Forbidden";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  // if (!user) return <Login />;
  if (!user) return <Forbidden />;

  return <>{children}</>;
};

export default ProtectedRoute;
