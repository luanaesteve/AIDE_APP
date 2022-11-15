import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1 className="text-center p-20 gap-10 font-bold ">CARGANDO</h1>;

  if (!user) return <Navigate to="/" />;

  return <>{children}</>;
}