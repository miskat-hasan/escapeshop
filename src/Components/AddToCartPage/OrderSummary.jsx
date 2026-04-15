import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="w-[363px] p-6 rounded-4xl border-[0.4px] border-[#C1C79E] h-fit">
      <h4 className="text-white text-center text-[32px] font-bold leading-[150%] mb-[62px]">
        Order Summary
      </h4>

      <h6 className="text-white text-[18px] font-semibold leading-[150%] mb-6">
        Product Details:
      </h6>
      <div className="flex w-full items-center justify-between mb-4.5">
        <p className="text-white text-base font-normal leading-6">
          Sub Total :
        </p>
        <p className="text-white text-[20px] font-semibold leading-[150%]">
          $34.00
        </p>
      </div>
      <div className="flex w-full items-center justify-between mb-4">
        <p className="text-white text-base font-normal leading-6">
          Sub Total :
        </p>
        <p className="text-white text-[20px] font-semibold leading-[150%]">
          $34.00
        </p>
      </div>
      <div className="w-full h-px bg-[#D1D5DC] mb-4"></div>
      <div className="flex w-full items-center justify-between mb-4">
        <p className="text-white text-base font-normal leading-6">Total :</p>
        <p className="text-white text-[20px] font-semibold leading-[150%]">
          $34.00
        </p>
      </div>
      <div className="mt-16">
        <Link to={'/order-summary'} className="flex w-full cursor-pointer h-14 p-2.5 justify-center items-center gap-2.5 self-stretch rounded-lg bg-[#C1C79E] text-[#051619] text-center text-base font-medium leading-[150%]">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
