import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AuthSuccessfulModal = ({ title, subTitle, buttonText, buttonLink }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="relative min-h-screen bg-cover bg-center auth-bg">
      <div className="relative z-10 px-2 py-8 sm:p-8 flex items-center justify-center w-full min-h-screen">
        <div className="flex w-[500px] px-2 py-8 xs:p-8 flex-col items-start gap-8 rounded-[20px] border-[0.4px] border-[#9caf9c] bg-secondary-500">
          {/* logo & title */}
          <div className="flex flex-col items-center gap-4 self-stretch">
            <figure>
              <img src="/logo.png" alt="logo" />
            </figure>
            <div className="space-y-2">
              <h3 className="text-white text-center text-2xl xl:text-[36px] font-semibold leading-[150%]">
                {title}
              </h3>
              <p className="text-[#99A1AF] text-center text-base font-normal leading-[150%]">
                {subTitle}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={() =>
              navigate(location?.state ? location?.state : buttonLink)
            }
            className="flex w-full h-[52px] py-2 px-4 justify-center items-center gap-2 self-stretch rounded-xl bg-primary text-[#051619] text-center text-base font-semibold leading-6 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 hover:bg-[#d9e2a8] transition duration-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccessfulModal;
