import { useLocation, Navigate } from "react-router-dom";

function ProtectedRoute({ isLogged, children }) {
  const location = useLocation();
  return isLogged ? (
    children
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
}

export default ProtectedRoute;
