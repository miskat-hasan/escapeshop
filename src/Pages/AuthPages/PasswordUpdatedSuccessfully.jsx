import React from "react";
import AuthSuccessfulModal from "../../Components/AuthSuccessfulModal";

const PasswordUpdatedSuccessfully = () => {
  return (
    <div>
      <AuthSuccessfulModal
        title={"Password Update Successfully"}
        subTitle={"Your password has been update successfully"}
        buttonText={"Back to Login"}
        buttonLink={"/auth/login"}
      />
    </div>
  );
};

export default PasswordUpdatedSuccessfully;
