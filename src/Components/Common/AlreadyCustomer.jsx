import React from "react";
import { Link } from "react-router-dom";
import customerOverlay from "../../assets/customer_login.png";

const AlreadyCustomer = () => {
  return (
    <section className="container">
      <div className="relative text-center p-5 rounded-2xl border-t-0 border-b-0 border border-gray-500">
        <h2 className="section_title mb-2 md:mb-5">
          Already a <span>customer</span>?
        </h2>

        <p className="text-off-white lg:text-lg mb-5 md:mb-10 max-w-[650px] mx-auto">
          Login to track your orders, reorder favorites, and access exclusive
          customer perks.
        </p>

        <Link
          to="/auth/signin"
          className="rounded-2xl bg-primary-pink text-white cursor-pointer shadow-[0_5px_0_0_#7E2758] py-2 md:py-2.5 px-7 md:px-10 hover:bg-[#ce2a87] hover:translate-y-0.5 active:translate-y-[3px] active:shadow-[0_2px_0_0_#7E2758] transition-all duration-300 block w-fit mx-auto font-semibold text-sm md:text-lg"
        >
          Login
        </Link>

        {/* Overlay */}
        <div className="absolute left-8 top-0 -z-10">
          <img src={customerOverlay} alt="frame" />
        </div>
      </div>
    </section>
  );
};

export default AlreadyCustomer;
