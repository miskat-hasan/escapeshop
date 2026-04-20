import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import OTPInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useResendOtp, useVerifyOtp } from "../../Hooks/api/auth_api";
import { ImSpinner9 } from "react-icons/im";
import { FiArrowLeftCircle } from "react-icons/fi";

const VerifyIdentity = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location?.state?.email;
  const { mutateAsync: verifyOtpMutation, isPending } = useVerifyOtp();
  const { mutateAsync: resendOtpMutation, isPending: isResending } =
    useResendOtp();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!email) navigate("/auth/forgot-password", { replace: true });
  }, [email]);

  const onSubmit = async (data) => {
    const payload = { email: decodeURIComponent(email), ...data };
    await verifyOtpMutation(payload, {
      onSuccess: (res) => {
        if (res?.success) {
          toast.success(res?.message);
          navigate("/auth/reset-password", {
            state: { email, otp: data?.otp },
          });
        } else {
          toast.error(res?.message || "Something went wrong.");
        }
      },
      onError: (err) => {
        toast.error(err?.message || "Verification failed. Please try again.");
      },
    });
  };

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResendOtp = async () => {
    if (timer > 0) return;

    const payload = { email: decodeURIComponent(email) };

    await resendOtpMutation(payload, {
      onSuccess: (res) => {
        if (res?.success) {
          toast.success(res?.message);
          setTimer(30);
        } else {
          toast.error(res?.message || "Something went wrong.");
        }
      },
      onError: (err) => {
        toast.error(err?.message || "Failed to resend OTP. Please try again.");
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
                OTP Verification
              </h3>
              <p className="text-[#99A1AF] text-center max-sm:text-sm font-normal leading-[150%]">
                We have sent a verification code to email address{" "}
              </p>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div>
              <p className="text-[#99A1AF] text-sm font-normal leading-[150%] mb-2">
                Enter 6-digit OTP
              </p>
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
          <div className="w-full space-y-3">
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
                "OTP Verification"
              )}
            </button>
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={isResending || timer > 0}
              className="text-sm sm:text-base flex justify-center underline text-primary w-full cursor-pointer disabled:cursor-not-allowed"
            >
              {isResending
                ? "Resending..."
                : timer > 0
                  ? `Resend OTP in ${timer}s`
                  : "Resend OTP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyIdentity;