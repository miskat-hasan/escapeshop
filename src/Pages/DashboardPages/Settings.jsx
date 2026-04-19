import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AlertSVG, LockSVG2 } from "../../Components/Svg/SvgContainer";

const Settings = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      <div className="flex max-w-[989px] px-6 py-9 flex-col items-start gap-6 rounded-2xl bg-[#0C353C]/20 border border-secondary-100">
        {/* Current Password */}
        <div className="relative w-full mb-4">
          <p className="text-[#E7EBEC] leading-[150%] mb-6">
            Current Password <span className="text-[#DF1C41]">*</span>
          </p>
          <span className="absolute top-17 left-6"><LockSVG2 /></span>
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Enter your current password"
            className={`flex py-5 px-14 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-transparent text-[#8FA2A5] text-base font-normal leading-6 w-full pr-10 ${
              errors.current_password && "border-red-400"
            } `}
            {...register("current_password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          <span
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute right-3 top-17 cursor-pointer text-[#8FA2A5]"
          >
            {showCurrentPassword ? (
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

        {/* New Password */}
        <div className="relative w-full">
          <p className="text-[#E7EBEC] leading-[150%] mb-6">
            New Password <span className="text-[#DF1C41]">*</span>
          </p>
          <span className="absolute top-17 left-6"><LockSVG2 /></span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            className={`flex py-5 px-14 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-transparent text-[#8FA2A5] text-base font-normal leading-6 w-full pr-10 ${
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
            className="absolute right-3 top-17 cursor-pointer text-[#8FA2A5]"
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
        <div className="relative w-full">
          <p className="text-[#E7EBEC] leading-[150%] mb-6">
            Confirm Password <span className="text-[#DF1C41]">*</span>
          </p>
          <span className="absolute top-17 left-6"><LockSVG2 /></span>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
             className={`flex py-5 px-14 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-transparent text-[#8FA2A5] text-base font-normal leading-6 w-full pr-10 ${
              errors.password_confirmation && "border-red-400"
            } `}
            {...register("password_confirmation", {
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />

          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-17 cursor-pointer text-[#8FA2A5]"
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
      <button className="flex w-full p-4 text-lg flex-col justify-center items-center gap-2.5 rounded-[10px] bg-primary text-[#051619] text-center leading-[150%] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
        Update Password
      </button>
    </form>
  );
};

export default Settings;
