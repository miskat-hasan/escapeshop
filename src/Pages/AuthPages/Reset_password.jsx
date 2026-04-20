import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AlertSVG } from "../../Components/Svg/SvgContainer";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useResetPassword } from "../../Hooks/api/auth_api";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email;
  const otp = location?.state?.otp;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch("password");

  const { mutateAsync: resetPasswordMutation, isPending } = useResetPassword();

  const onSubmit = async (data) => {
    const payload = { ...data, email, otp };

    await resetPasswordMutation(payload, {
      onSuccess: (res) => {
        if (res?.success) {
          toast.success(res?.message);
          navigate("/auth/password-updated-successfully");
        }
      },
    });
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center auth-bg">
      <div className="relative z-10 px-2 py-8 sm:p-8 flex items-center justify-center w-full min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[500px] px-2 py-8 xs:p-8 flex-col items-start gap-8 rounded-[20px] border-[0.4px] border-[#9caf9c] bg-secondary-500"
        >
          <div
            onClick={() => navigate(-1)}
            className="absolute text-primary md:text-lg cursor-pointer font-normal capitalize flex gap-1 items-center sm:hover:-translate-x-2 hover:text-[#d7f5a7] transition duration-300"
          >
            <FiArrowLeftCircle className="size-5 md:size-6" />
          </div>
          {/* logo & title */}
          <div className="flex flex-col items-center gap-4 self-stretch">
            <figure className="max-sm:w-[90px]">
              <img src="/logo.png" alt="logo" className="size-full object-cover"/>
            </figure>
            <div className="sm:space-y-2">
              <h3 className="text-white text-center text-xl sm:text-2xl font-semibold leading-[150%]">
                Create a New Password
              </h3>
              <p className="text-[#99A1AF] text-center max-sm:text-sm font-normal leading-[150%]">
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
            disabled={isPending}
            className="flex w-full h-12 sm:h-[52px] py-2 px-4 justify-center items-center gap-2 self-stretch rounded-xl bg-primary text-[#051619] text-center text-base font-semibold leading-6 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 hover:bg-[#d9e2a8] transition duration-300"
          >
            {isPending ? (
              <span className="w-full flex gap-3 items-center justify-center">
                <ImSpinner9 className="animate-spin" />
                Processing...
              </span>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
