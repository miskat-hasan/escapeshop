import React, { useState, useEffect } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const REMEMBER_KEY = "age_verified_expiry";
const REMEMBER_DAYS = 30;

export const checkAgeVerified = () => {
  const expiry = localStorage.getItem(REMEMBER_KEY);
  if (expiry) {
    if (Date.now() < Number(expiry)) return true;

    localStorage.removeItem(REMEMBER_KEY);
  }

  return !!sessionStorage.getItem("age_verified_session");
};

const AgeVerificationModal = ({ onVerified }) => {
  const [remember, setRemember] = useState(true);

  useEffect(() => {
    const modalEl = document.querySelector("#age-modal");
    if (modalEl) disableBodyScroll(modalEl);
    return () => clearAllBodyScrollLocks();
  }, []);

  const handleEnter = () => {
    if (remember) {
      const expiry = Date.now() + REMEMBER_DAYS * 24 * 60 * 60 * 1000;
      localStorage.setItem(REMEMBER_KEY, String(expiry));
    } else {
      sessionStorage.setItem("age_verified_session", "true");
    }
    onVerified();
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        id="age-modal"
        className="relative z-10 w-[90%] max-w-[520px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-8 md:p-10 flex flex-col items-center gap-5 text-center shadow-2xl"
      >
        {/* Badges */}
        <div className="flex items-center gap-2">
          <span className="px-4 py-1 rounded-full border border-white/40 text-white text-xs font-semibold tracking-wider uppercase">
            Legal Law
          </span>
          <span className="px-4 py-1 rounded-full border border-white/40 text-white text-xs font-semibold tracking-wider uppercase">
            Adults 21+
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-[120%]">
          Are you 21 or older?
        </h2>

        {/* Description */}
        <p className="text-white/80 text-sm md:text-base font-normal leading-[170%] max-w-[380px]">
          This site is for adults 21+ only. We sell legal herbal smoking
          products for wellness and relaxation purposes. Please verify your age
          to continue.
        </p>

        {/* Remember checkbox */}
        <label className="flex items-center gap-2.5 cursor-pointer">
          <div
            onClick={() => setRemember((prev) => !prev)}
            className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
              remember
                ? "bg-[#C1C79E] border-[#C1C79E]"
                : "bg-white/10 border-white/40"
            }`}
          >
            {remember && (
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <polyline
                  points="2,6 5,9 10,3"
                  stroke="#051619"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span
            onClick={() => setRemember((prev) => !prev)}
            className="text-white/80 text-sm font-normal select-none"
          >
            Remember me for 30 days
          </span>
        </label>

        {/* Buttons */}
        <div className="flex items-center gap-3 w-full mt-1">
          <button
            onClick={handleEnter}
            className="flex-1 h-12 rounded-full bg-white/20 border border-white/30 text-white text-base font-semibold hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm"
          >
            Yes, enter
          </button>
          <button
            onClick={handleExit}
            className="flex-1 h-12 rounded-full bg-white/10 border border-white/30 text-white text-base font-semibold hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm"
          >
            No, exit
          </button>
        </div>

        {/* Footer note */}
        <p className="text-white/50 text-xs font-medium tracking-widest uppercase mt-1">
          Please consume responsibly.
        </p>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
