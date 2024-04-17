import { Navigate } from "react-router-dom";
import { UseIsLoggedIn } from "../store/logged-in";

interface MyRoutesProps {
  children: React.ReactNode;
}

export const MyRoute: React.FC<MyRoutesProps> = ({ children }) => {
  const isAuthenticated = UseIsLoggedIn();
  return isAuthenticated.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};
