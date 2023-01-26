import React from "react";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectRoute = ({ children }) => {
  const isAuth = localStorage.getItem("user");
  if (!isAuth || isAuth === "undefined") {
    return <Navigate to="/auth/login" replace />;
  }
  return children ? children : <Outlet />;
};
