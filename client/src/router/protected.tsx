import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  requiredRole?: string;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ requiredRole }) => {
  const role = "user";
  if (role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
