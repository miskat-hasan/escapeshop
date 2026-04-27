import React, { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import AgeVerificationModal, {
  checkAgeVerified,
} from "../Components/Shared/AgeVerificationModal";
import useAuth from "../Hooks/useAuth";

const MainLayout = () => {
  const { user } = useAuth();

  const [ageVerified, setAgeVerified] = useState(
    () => !!user || checkAgeVerified(),
  );

  return (
    <>
      {!ageVerified && (
        <AgeVerificationModal onVerified={() => setAgeVerified(true)} />
      )}
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
