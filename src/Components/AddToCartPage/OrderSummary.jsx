import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const OrderSummary = () => {
  const { cartItems, subtotal } = useCart();
  const [shipping, setShipping] = useState("free");

  const shippingCost = shipping === "express" ? 5 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="w-full p-4 md:p-6 rounded-4xl border-[0.4px] border-[#C1C79E] h-fit">
      <h4 className="text-white text-center text-2xl md:text-[32px] font-bold leading-[150%] mb-8 md:mb-[62px]">
        Order Summary
      </h4>

      <h6 className="text-white text-base md:text-[18px] font-semibold leading-[150%] mb-4 md:mb-6">
        Product Details:
      </h6>

      {/* Per-item rows */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex w-full items-center justify-between mb-3"
        >
          <p className="text-white text-sm md:text-base font-normal leading-6 truncate flex-1 pr-4">
            {item.name} <span className="text-[#B4C0C3]">x{item.quantity}</span>
          </p>
          <p className="text-white text-lg md:text-[20px] font-semibold leading-[150%] flex-shrink-0">
            ${(Number(item.sell_price) * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}

      <div className="flex w-full items-center justify-between mb-3 md:mb-4">
        <p className="text-white text-sm md:text-base font-normal leading-6">
          Sub Total :
        </p>
        <p className="text-white text-lg md:text-[20px] font-semibold leading-[150%]">
          ${subtotal.toFixed(2)}
        </p>
      </div>

      {/* Shipping */}
      <div className="space-y-3 mb-4">
        <p className="text-white text-base md:text-lg font-medium">Shipping</p>
        <div className="flex items-center justify-between">
          <label
            htmlFor="free"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              id="free"
              name="shipping"
              value="free"
              checked={shipping === "free"}
              onChange={() => setShipping("free")}
              className="accent-[#C1C79E] w-4 h-4"
            />
            <span className="text-white text-sm md:text-base font-medium leading-[150%]">
              Free Delivery
            </span>
          </label>
          <p className="text-[#C1C79E] text-lg md:text-xl font-semibold">
            Free
          </p>
        </div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="express"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              id="express"
              name="shipping"
              value="express"
              checked={shipping === "express"}
              onChange={() => setShipping("express")}
              className="accent-[#C1C79E] w-4 h-4"
            />
            <span className="text-white text-sm md:text-base font-medium leading-[150%]">
              Express Delivery
            </span>
          </label>
          <p className="text-white text-lg md:text-xl font-semibold">$5.00</p>
        </div>
      </div>

      <div className="w-full h-px bg-[#D1D5DC] mb-3 md:mb-4"></div>
      <div className="flex w-full items-center justify-between mb-3 md:mb-4">
        <p className="text-white text-sm md:text-base font-normal leading-6">
          Total :
        </p>
        <p className="text-white text-lg md:text-[20px] font-semibold leading-[150%]">
          ${total.toFixed(2)}
        </p>
      </div>

      <div className="mt-10 md:mt-16">
        <Link
          to="/checkout"
          className="flex w-full cursor-pointer h-12 md:h-14 p-2.5 justify-center items-center gap-2.5 self-stretch rounded-lg bg-[#C1C79E] text-[#051619] text-center text-sm md:text-base font-medium leading-[150%]"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
