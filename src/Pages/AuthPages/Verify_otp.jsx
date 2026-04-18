import React from "react";
import { Controller, useForm } from "react-hook-form";
import OTPInput from "react-otp-input";

const VerifyOTP = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center auth-bg">
      <div className="relative z-10 px-2 py-8 sm:p-8 flex items-center justify-center w-full min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[500px] px-2 py-8 xs:p-8 flex-col items-start gap-8 rounded-[20px] border-[0.4px] border-[#9caf9c] bg-secondary-500"
        >
          {/* logo & title */}
          <div className="flex flex-col items-center gap-4 self-stretch">
            <figure>
              <img src="/logo.png" alt="logo" />
            </figure>
            <div className="space-y-2">
              <h3 className="text-white text-center text-2xl font-semibold leading-[150%]">
                Email Verification OTP
              </h3>
              <p className="text-[#99A1AF] text-center text-base font-normal leading-[150%]">
                Enter the <span className="text-white">6-digit</span> OTP we sent to your Email to continue.
              </p>
            </div>
          </div>

          {/* form input */}
          <div className="w-full space-y-4">
            {/* Email */}
            <div>
              <p className="text-white text-sm font-normal leading-[150%] mb-2">
                Enter OTP
              </p>
              {/* OTP Input */}
              <div>
                <Controller
                  name="otp"
                  control={control}
                  rules={{
                    required: "OTP is required",
                    minLength: {
                      value: 6,
                      message: "OTP must be 6 digits",
                    },
                  }}
                  render={({ field }) => (
                    <OTPInput
                      {...field}
                      value={field.value || ""}
                      onChange={field.onChange}
                      numInputs={6}
                      renderInput={(props) => <input {...props} />}
                      containerStyle={"flex items-center !gap-2 justify-center"}
                      inputStyle={`mx-auto !w-10 md:!h-12 !h-10 md:!w-12 xl:!w-14 xl:!h-16 border border-[#E5E7EB] md:rounded-[12px] !bg-plan-card rounded-[8px] text-lg font-medium text-black bg-white focus:ring-2 focus:ring-primary-pink outline-none`}
                    />
                  )}
                />
                {errors.otp && (
                  <p className="text-red-600 mt-2 text-sm text-center">
                    {errors.otp.message}
                  </p>
                )}
              </div>
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
            OTP Verification
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
