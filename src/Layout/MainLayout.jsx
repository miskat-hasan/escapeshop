import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
// import Navbar from "../Shared/Navbar";
// import Footer from "../Shared/Footer";

const RootLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
