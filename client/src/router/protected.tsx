import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  // requiredRole?: string;
  token: string | null;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
  // requiredRole,
  token,
}) => {
  // const role = "user";
  // if (role !== requiredRole) {
  //   return <Navigate to="/" replace />;
  // }

  if (!token) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
