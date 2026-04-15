import React from "react";
import { Link } from "react-router-dom";
import { LockSVG, OrderBoxSVG } from "../Svg/SvgContainer";

const OrderSummary = () => {
  return (
    <div className="flex w-[496px] p-6 flex-col items-center rounded-3xl border-[0.4px] border-[#C1C79E] bg-transparent h-fit">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex size-[60px] items-center justify-center rounded-full bg-primary">
          <OrderBoxSVG />
        </div>
        <div className="space-y-1.5">
          <h6 className="text-white text-2xl font-semibold leading-[150%]">
            Order Summary
          </h6>
          <p className="text-white text-base font-normal leading-[150%]">
            Please provide your contact details
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-white text-[18px] font-semibold leading-[150%]">
          Product
        </p>
        <p className="text-white text-[18px] font-semibold leading-[150%]">
          Subtotal
        </p>
      </div>
      <div className="w-full h-px bg-[#EBECF0] my-4"></div>
      <div className="flex w-full items-center justify-between mb-4">
        <div className="space-y-1.5">
          <p className="text-white text-base font-medium leading-[150%]">
            Cheap Indoor THCA Flower Ounce
          </p>
          <p className="text-white text-sm font-normal leading-[150%]">
            Qty: 1
          </p>
        </div>
        <p className="text-white text-2xl font-semibold leading-[150%]">
          $34.00
        </p>
      </div>
      <div className="flex w-full items-center justify-between mb-4">
        <div className="space-y-1.5">
          <p className="text-white text-base font-medium leading-[150%]">
            Cheap Indoor THCA Flower Ounce
          </p>
          <p className="text-white text-sm font-normal leading-[150%]">
            Qty: 1
          </p>
        </div>
        <p className="text-white text-2xl font-semibold leading-[150%]">
          $34.00
        </p>
      </div>
      <div className="flex w-full items-center justify-between mb-4">
        <div className="space-y-1.5">
          <p className="text-white text-base font-medium leading-[150%]">
            Cheap Indoor THCA Flower Ounce
          </p>
          <p className="text-white text-sm font-normal leading-[150%]">
            Qty: 1
          </p>
        </div>
        <p className="text-white text-2xl font-semibold leading-[150%]">
          $34.00
        </p>
      </div>
      <div className="flex w-full items-center justify-between mb-4 border-y py-6">
        <p className="text-[#D1D5DC] text-base font-normal leading-[164%]">
          Sub Total :
        </p>
        <p className="text-white text-2xl font-semibold leading-[150%]">
          $34.00
        </p>
      </div>
      <div className="flex w-full items-center justify-between mb-4">
        <p className="text-white text-[20px] font-semibold leading-[150%]">
          Total :
        </p>
        <p className="text-white text-[32px] font-semibold leading-[132%] tracking-[-0.64px]">
          $34.00
        </p>
      </div>
      <div className="space-y-6 mb-6 w-full">
        <p className="text-xl">Shipping</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="radio" name="" id="" />
            <div className="space-y-1.5">
              <p className="font-medium">Free Delivery</p>
              <p className="text-sm">For orders above $25</p>
            </div>
          </div>
          <p className="text-primary text-2xl font-semibold">Free</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="radio" name="" id="" />
            <p className="font-medium">Express Delivery</p>
          </div>
          <p className="text-2xl font-semibold">$5.00</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between mb-4 border-t pt-4">
        <p className="text-white text-[20px] font-semibold leading-[150%]">
          Total :
        </p>
        <p className="text-white text-[32px] font-semibold leading-[132%] tracking-[-0.64px]">
          $34.00
        </p>
      </div>
      <div className="mt-8 w-full">
        <Link
          to={"/order-summary"}
          className="flex w-full cursor-pointer h-14 p-2.5 justify-center items-center gap-2.5 self-stretch rounded-lg bg-[#C1C79E] text-[#051619] text-center text-base font-medium leading-[150%]"
        >
          Proceed to Checkout
        </Link>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center gap-2">
          <LockSVG />
          <p className="text-[#D1D5DC] text-center text-sm font-normal leading-[150%]">
            Your personal details are safe with us. <br /> Payments are
            processed securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
