import React from "react";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import Signup from "../Pages/AuthPages/Signup";
import SignIn from "../Pages/AuthPages/SignIn";
import Verify_otp from "../Pages/AuthPages/Verify_otp";
import Forgot_Password from "../Pages/AuthPages/Forgot_Password";
import Verify_identity from "../Pages/AuthPages/Verify_identity";
import Reset_password from "../Pages/AuthPages/Reset_password";
import RegisterSuccessfully from "../Pages/AuthPages/RegisterSuccessfully";
import PasswordUpdatedSuccessfully from "../Pages/AuthPages/PasswordUpdatedSuccessfully";
import Home from "../Pages/Home/Home";
import AboutUsPage from "../Pages/AboutUsPage";
import ProductsPage from "../Pages/ProductsPage";
import SingleProductPage from "../Pages/SingleProductPage";
import ContactUsPage from "../Pages/ContactUsPage";
import CustomerReviewPage from "../Pages/CustomerReviewPage";
import AddToCartPage from "../Pages/AddToCartPage";
import CustomerInformationPage from "../Pages/CustomerInformationPage";
import PrivateRouter from "./PrivateRouter";
import PersonalInformation from "../Pages/DashboardPages/PersonalInformation";
import Logout from "../Pages/DashboardPages/Logout";
import Settings from "../Pages/DashboardPages/Settings";
import Orders from "../Pages/DashboardPages/Orders";
import OrderHistory from "../Pages/DashboardPages/OrderHistory";
// import AddToCart from "../Pages/Add-to-cart/AddToCart";
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
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/customer-review",
        element: <CustomerReviewPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/cart",
        element: <AddToCartPage />,
      },
      {
        path: "/order-summary",
        element: <CustomerInformationPage />,
      },
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
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <PersonalInformation />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/order-history",
        element: <OrderHistory />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/logout",
        element: <Logout />,
      },
    ],
  },

  // 404
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

export default router;
