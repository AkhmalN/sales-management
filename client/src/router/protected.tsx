import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  token: string | null;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ token }) => {
  if (!token) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
