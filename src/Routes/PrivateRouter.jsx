import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import React from "react";

const PrivateRouter = ({ children }) => {
  const { user, token } = useAuth();
  const location = useLocation();

  // if (loading) {
  //   return (
  //     <div className="h-screen flex justify-center items-center">
  //       <div className="animate-spin rounded-full size-14 lg:size-16 xl:size-20 border-t-4 border-primary-pink border-solid" />
  //     </div>
  //   );
  // }

  if (token || user) return children;

  return <Navigate to="/auth/login" state={location?.pathname} replace />;
};

export default PrivateRouter;
