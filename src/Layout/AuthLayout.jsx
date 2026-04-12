import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default AuthLayout;
