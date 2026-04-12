import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AlertSVG } from "../../Components/Svg/SvgContainer";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center auth-bg">
      <div className="relative z-10 p-8 flex items-center justify-center w-full min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[500px] p-8 flex-col items-start gap-8 rounded-[20px] border-[0.4px] border-[#9caf9c] bg-secondary-500"
        >
          {/* logo & title */}
          <div className="flex flex-col items-center gap-4 self-stretch">
            <figure>
              <img src="/logo.png" alt="logo" />
            </figure>
            <div className="space-y-2">
              <h3 className="text-white text-center text-2xl font-semibold leading-[150%]">
                Create a New Password
              </h3>
              <p className="text-[#99A1AF] text-center text-base font-normal leading-[150%]">
                Choose a new strong password to secure your account.
              </p>
            </div>
          </div>

          {/* form input */}
          <div className="w-full space-y-4">
            {/* Password */}
            <div className="relative">
              <p className="text-[#99A1AF] text-sm font-normal leading-[150%] mb-2">
                Enter New Password <span className="text-[#DF1C41]">*</span>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className={`flex h-[52px] py-2 px-3 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-white text-[#818898] text-base font-normal leading-6 w-full pr-10 ${
                  errors.password && "border-red-400"
                } `}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-11.5 cursor-pointer text-[#818898]"
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </span>

              {errors.password && (
                <p className="text-[#DF1C41] text-sm mt-1 flex items-center gap-1">
                  <AlertSVG />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <p className="text-[#99A1AF] text-sm font-normal leading-[150%] mb-2">
                Confirm New Password <span className="text-[#DF1C41]">*</span>
              </p>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                className={`flex h-[52px] py-2 px-3 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-white text-[#818898] text-base font-normal leading-6 w-full pr-10 ${
                  errors.password_confirmation && "border-red-400"
                } `}
                {...register("password_confirmation", {
                  required: "Confirm new password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-11.5 cursor-pointer text-[#818898]"
              >
                {showConfirmPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </span>

              {errors.password_confirmation && (
                <p className="text-[#DF1C41] text-sm mt-1 flex items-center gap-1">
                  <AlertSVG />
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            // disabled={isPending}
            className="flex w-full h-[52px] py-2 px-4 justify-center items-center gap-2 self-stretch rounded-xl bg-primary text-[#051619] text-center text-base font-semibold leading-6 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 hover:bg-[#d9e2a8] transition duration-300"
          >
            {/* {isPending ? (
                      <span className="w-full flex gap-3 items-center justify-center">
                        <ImSpinner9 className="animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      "Continue"
                    )} */}
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
