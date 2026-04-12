import React from "react";
import AuthSuccessfulModal from "../../Components/AuthSuccessfulModal";

const RegisterSuccessfully = () => {
  return (
    <div>
      <AuthSuccessfulModal
        title={"Your Account Create Successfully"}
        subTitle={"Account successfully Created! Enjoy Exploring."}
        buttonText={"Let’s Start"}
        buttonLink={"/"}
      />
    </div>
  );
};

export default RegisterSuccessfully;
