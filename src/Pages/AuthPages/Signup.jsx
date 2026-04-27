import React, { useState } from "react";
import {
  AlertSVG,
  AppleSVG,
  GoogleSVG,
} from "../../Components/Svg/SvgContainer";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegister, useSocialGoogleLogin } from "../../Hooks/api/auth_api";
import { ImSpinner9 } from "react-icons/im";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useRegister();
  const { mutateAsync: googleLoginMutation, isPending: googleLoginPending } =
    useSocialGoogleLogin();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        if (res?.success) {
          toast.success(res?.message);
          navigate("/auth/verify-otp", {
            state: { email: data?.email },
          });
        }
      },
    });
  };

  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.access_token;
      console.log(tokenResponse);
      console.log(token);
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_GOOGLE_URL}/oauth2/v2/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const payload = {
          token,
          provider: "google",
          name: data?.name,
          email: data?.email,
          avatar_path: data?.picture,
        };
        await googleLoginMutation(payload);
        console.log(token);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: (error) => {
      console.error("Google Login Failed:", error);
    },
  });

  return (
    <div className="relative min-h-screen bg-cover bg-bottom auth-bg">
      <div className="relative z-10 px-2 py-8 sm:p-8 flex items-center justify-center w-full min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[500px] px-2 pb-5 xs:p-8 flex-col items-start gap-5 sm:gap-8 rounded-[20px] border-[0.4px] border-[#9caf9c] bg-secondary-500"
        >
          {/* logo & title */}
          <div className="flex flex-col items-center gap-4 self-stretch">
            <figure className="max-sm:w-[90px]">
              <img
                src="/logo.png"
                alt="logo"
                className="size-full object-cover"
              />
            </figure>
            <div className="sm:space-y-2">
              <h3 className="text-white text-center text-xl sm:text-2xl font-semibold leading-[150%]">
                Create New Account
              </h3>
              <p className="text-[#99A1AF] text-center text-base font-normal leading-[150%]">
                Enter your details to sing up
              </p>
            </div>
          </div>

          {/* form input */}
          <div className="w-full space-y-4">
            {/* full name */}
            <div>
              <p className="text-[#99A1AF] text-sm font-normal leading-[150%] mb-2">
                Full Name <span className="text-[#DF1C41]">*</span>
              </p>
              <input
                type="text"
                className={`flex h-[52px] py-2 px-3 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-white text-[#818898] text-base font-normal leading-6 w-full ${errors.name && "border-red-400"}`}
                placeholder="Enter your Name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-[#DF1C41] text-sm mt-1 flex items-center gap-1">
                  <AlertSVG />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <p className="text-[#99A1AF] text-sm font-normal leading-[150%] mb-2">
                Email Address <span className="text-[#DF1C41]">*</span>
              </p>
              <input
                type="email"
                className={`flex h-[52px] py-2 px-3 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-white text-[#818898] text-base font-normal leading-6 w-full ${errors.email && "border-red-400"}`}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <p className="text-[#DF1C41] text-sm mt-1 flex items-center gap-1">
                  <AlertSVG />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <p className="text-[#99A1AF] text-sm font-normal leading-[150%] mb-2">
                Password <span className="text-[#DF1C41]">*</span>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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
                Confirm Password <span className="text-[#DF1C41]">*</span>
              </p>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className={`flex h-[52px] py-2 px-3 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-white text-[#818898] text-base font-normal leading-6 w-full pr-10 ${
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

            {/* age verification */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="age_verified"
                  className="accent-[#C1C79E] w-4 h-4 cursor-pointer"
                  {...register("age_verified", {
                    required: "You must verify your age",
                  })}
                />
                <label
                  htmlFor="age_verified"
                  className="text-[#D1D5DC] text-sm md:text-base font-normal leading-[150%] cursor-pointer"
                >
                  I am 21 or older
                  {/* and I agree to the{" "}
                <Link to="/terms" className="underline">
                  Terms of Service
                </Link> */}
                </label>
              </div>
              {errors?.age_verified && (
                <p className="text-[#DF1C41] text-sm mt-1 flex items-center gap-1">
                  <AlertSVG />
                  {errors?.age_verified?.message}
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
              "Sign Up"
            )}
          </button>
          <p className="text-[#99A1AF] text-center text-base font-normal leading-6 w-full">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-white">
              Login
            </Link>
          </p>
          <div className="space-y-3 sm:space-y-6 w-full">
            <div className="flex items-center gap-5 text-[#99A1AF] w-full">
              <div className="flex-1 h-[1px] bg-[#99A1AF]" />
              <span>or connect with</span>
              <div className="flex-1 h-[1px] bg-[#99A1AF]" />
            </div>

            {/* GOOGLE LOGIN */}
            <button
              type="button"
              onClick={handleLoginWithGoogle}
              disabled={googleLoginPending}
              className="flex h-12 sm:h-[52px] py-3 px-6 w-full justify-center items-center gap-[10px] self-stretch text-[#99A1AF] text-center text-base font-medium leading-6 rounded-xl border-[.5px] border-[#99A1AF] cursor-pointer hover:text-white hover:bg-secondary-100 transition duration-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {googleLoginPending ? (
                <span className="w-full flex gap-3 items-center justify-center">
                  <ImSpinner9 className="animate-spin" />
                </span>
              ) : (
                <>
                  <GoogleSVG />
                  <span>Sign in with Google</span>
                </>
              )}
            </button>

            {/* APPLE LOGIN */}
            <div className="flex h-12 sm:h-[52px] py-3 px-6 justify-center items-center gap-[10px] self-stretch text-[#99A1AF] text-center text-base font-medium leading-6 rounded-xl border-[.5px] border-[#99A1AF] cursor-pointer hover:text-white hover:bg-secondary-100 transition duration-300">
              <AppleSVG />
              <span>Sign in with Apple</span>
            </div>
            <Link
              to={"/"}
              className="text-sm sm:text-base flex justify-center underline text-primary"
            >
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
