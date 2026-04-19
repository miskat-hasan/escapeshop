import React from "react";
import { Link } from "react-router-dom";
import { LockSVG, OrderBoxSVG } from "../Svg/SvgContainer";

const OrderSummary = () => {
  return (
    <div className="flex w-full p-4 md:p-6 flex-col items-center rounded-3xl border-[0.4px] border-[#C1C79E] bg-transparent h-fit">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 md:mb-8 self-start">
        <div className="flex size-[50px] md:size-[60px] items-center justify-center rounded-full bg-primary flex-shrink-0">
          <OrderBoxSVG />
        </div>
        <div className="space-y-1 md:space-y-1.5">
          <h6 className="text-white text-xl md:text-2xl font-semibold leading-[150%]">
            Order Summary
          </h6>
          <p className="text-white text-sm md:text-base font-normal leading-[150%]">
            Please provide your contact details
          </p>
        </div>
      </div>

      {/* Column headers */}
      <div className="flex items-center justify-between w-full">
        <p className="text-white text-base md:text-[18px] font-semibold leading-[150%]">
          Product
        </p>
        <p className="text-white text-base md:text-[18px] font-semibold leading-[150%]">
          Subtotal
        </p>
      </div>
      <div className="w-full h-px bg-[#EBECF0] my-3 md:my-4"></div>

      {/* Order items */}
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="flex w-full items-center justify-between mb-3 md:mb-4">
          <div className="space-y-1 md:space-y-1.5 flex-1 min-w-0 pr-4">
            <p className="text-white text-sm md:text-base font-medium leading-[150%]">
              Cheap Indoor THCA Flower Ounce
            </p>
            <p className="text-white text-xs md:text-sm font-normal leading-[150%]">
              Qty: 1
            </p>
          </div>
          <p className="text-white text-lg md:text-2xl font-semibold leading-[150%] flex-shrink-0">
            $34.00
          </p>
        </div>
      ))}

      {/* Subtotal */}
      <div className="flex w-full items-center justify-between mb-3 md:mb-4 border-y border-[#EBECF0]/30 py-4 md:py-6">
        <p className="text-[#D1D5DC] text-sm md:text-base font-normal leading-[164%]">
          Sub Total :
        </p>
        <p className="text-white text-lg md:text-2xl font-semibold leading-[150%]">
          $34.00
        </p>
      </div>

      {/* Total before shipping */}
      <div className="flex w-full items-center justify-between mb-4">
        <p className="text-white text-base md:text-[20px] font-semibold leading-[150%]">
          Total :
        </p>
        <p className="text-white text-2xl md:text-[32px] font-semibold leading-[132%] tracking-[-0.64px]">
          $34.00
        </p>
      </div>

      {/* Shipping */}
      <div className="space-y-4 md:space-y-6 mb-5 md:mb-6 w-full">
        <p className="text-white text-lg md:text-xl font-medium">Shipping</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="shipping"
              id="freeDelivery"
              defaultChecked
              className="accent-[#C1C79E] w-4 h-4 cursor-pointer"
            />
            <label htmlFor="freeDelivery" className="cursor-pointer">
              <div className="space-y-1 md:space-y-1.5">
                <p className="text-white text-sm md:text-base font-medium leading-[150%]">Free Delivery</p>
                <p className="text-[#D1D5DC] text-xs md:text-sm leading-[150%]">For orders above $25</p>
              </div>
            </label>
          </div>
          <p className="text-primary text-lg md:text-2xl font-semibold">Free</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="shipping"
              id="expressDelivery"
              className="accent-[#C1C79E] w-4 h-4 cursor-pointer"
            />
            <label
              htmlFor="expressDelivery"
              className="text-white text-sm md:text-base font-medium leading-[150%] cursor-pointer"
            >
              Express Delivery
            </label>
          </div>
          <p className="text-white text-lg md:text-2xl font-semibold">$5.00</p>
        </div>
      </div>

      {/* Total after shipping */}
      <div className="flex w-full items-center justify-between mb-3 md:mb-4 border-t border-[#EBECF0]/30 pt-3 md:pt-4">
        <p className="text-white text-base md:text-[20px] font-semibold leading-[150%]">
          Total :
        </p>
        <p className="text-white text-2xl md:text-[32px] font-semibold leading-[132%] tracking-[-0.64px]">
          $34.00
        </p>
      </div>

      {/* CTA — hidden on mobile (rendered inside form), visible on desktop */}
      <div className="hidden lg:block mt-6 md:mt-8 w-full">
        <Link
          to={"/order-summary"}
          className="flex w-full cursor-pointer h-14 p-2.5 justify-center items-center gap-2.5 self-stretch rounded-lg bg-[#C1C79E] text-[#051619] text-center text-base font-medium leading-[150%]"
        >
          Proceed to Checkout
        </Link>
      </div>

      {/* Security note */}
      <div className="flex items-center justify-center mt-6 md:mt-8">
        <div className="flex items-center gap-2">
          <LockSVG />
          <p className="text-[#D1D5DC] text-center text-xs md:text-sm font-normal leading-[150%]">
            Your personal details are safe with us. <br /> Payments are
            processed securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;