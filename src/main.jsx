import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
const queryClient = new QueryClient();
import router from "./Routes/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Provider/AuthProvider";
import { CartProvider } from "./Provider/CartContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <CartProvider> */}
        <AuthProvider>
          {/* <GoogleOAuthProvider
            clientId={`${import.meta.env.VITE_GOOGLE_AUTH_ID}`}
          > */}
            <RouterProvider router={router} />
            <ToastContainer />
          {/* </GoogleOAuthProvider> */}
        </AuthProvider>
      {/* </CartProvider> */}
    </QueryClientProvider>
  </React.StrictMode>,
);
