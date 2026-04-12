import React from "react";
import RootLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Signup from "../Pages/AuthPages/Signup";
import SignIn from "../Pages/AuthPages/SignIn";
import { createBrowserRouter } from "react-router-dom";
import Verify_otp from "../Pages/AuthPages/Verify_otp";
import Home from "../Pages/Home/Home";
import Forgot_Password from "../Pages/AuthPages/Forgot_Password";
import Verify_identity from "../Pages/AuthPages/Verify_identity";
import Reset_password from "../Pages/AuthPages/Reset_password";
import RegisterSuccessfully from "../Pages/AuthPages/RegisterSuccessfully";
import PasswordUpdatedSuccessfully from "../Pages/AuthPages/PasswordUpdatedSuccessfully";
// import DashboardLayout from "../Layout/DashboardLayout";
// import Overview from "../Pages/DashboardPages/Overview/Overview";
// import Orders from "../Pages/DashboardPages/Orders/Orders";
// import Settings from "../Pages/DashboardPages/Settings/Settings";
// import Designs from "../Pages/DashboardPages/Designs/Designs";
// import Support from "../Pages/DashboardPages/Support/Support";
// import ChooseSticker from "../Pages/Choose-sticker/ChooseSticker";
// import StickerType from "../Pages/Sticker-type/StickerType";
// import StickerCombo from "../Pages/Sticker-combo/StickerCombo";
// import AddToCart from "../Pages/Add-to-cart/AddToCart";
// import PrivateRouter from "./PrivateRouter";
// import DynamicPage from "../Pages/Dynamic/DynamicPage";
// import Returns from "../Pages/Returns/Returns";
// import ShippingProcess from "../Pages/Shipping-process/ShippingProcess";

const router = createBrowserRouter([
  // Main layout
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/choose-sticker",
      //   element: <ChooseSticker />,
      // },
      // {
      //   path: "/sticker-type/:id",
      //   element: <StickerType />,
      // },
      // {
      //   path: "/sticker-combo",
      //   element: <StickerCombo />,
      // },
      // {
      //   path: "/cart",
      //   element: <AddToCart />,
      // },
      // {
      //   path: "/return",
      //   element: <Returns />,
      // },
      // {
      //   path: "/shipping-process",
      //   element: <ShippingProcess />,
      // },
      // {
      //   path: "/dynamic/:slug",
      //   element: <DynamicPage />,
      // },
    ],
  },

  // Auth layout
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/register",
        element: <Signup />,
      },
      {
        path: "/auth/verify-otp",
        element: <Verify_otp />,
      },
      {
        path: "/auth/login",
        element: <SignIn />,
      },
      {
        path: "/auth/forgot-password",
        element: <Forgot_Password />,
      },
      {
        path: "/auth/verify-identity",
        element: <Verify_identity />,
      },
      {
        path: "/auth/reset-password",
        element: <Reset_password />,
      },
      {
        path: "/auth/register-successfully",
        element: <RegisterSuccessfully />,
      },
      {
        path: "/auth/password-updated-successfully",
        element: <PasswordUpdatedSuccessfully />,
      },
    ],
  },

  // Dashboard layout
  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRouter>
  //       <DashboardLayout />
  //     </PrivateRouter>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: <Overview />,
  //     },
  //     {
  //       path: "/dashboard/orders",
  //       element: <Orders />,
  //     },
  //     {
  //       path: "/dashboard/designs",
  //       element: <Designs />,
  //     },
  //     {
  //       path: "/dashboard/support",
  //       element: <Support />,
  //     },
  //     {
  //       path: "/dashboard/settings",
  //       element: <Settings />,
  //     },
  //   ],
  // },

  // 404
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

export default router;
