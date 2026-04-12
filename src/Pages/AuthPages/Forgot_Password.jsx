import React from "react";
import { useForm } from "react-hook-form";
import { AlertSVG } from "../../Components/Svg/SvgContainer";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
                Forgot Password
              </h3>
              <p className="text-[#99A1AF] text-center text-base font-normal leading-[150%]">
                Enter your email address and we’ll send you password reset instructions.
              </p>
            </div>
          </div>

          {/* form input */}
          <div className="w-full space-y-4">
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
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
