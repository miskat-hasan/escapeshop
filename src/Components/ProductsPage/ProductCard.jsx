import React from "react";
import { CartSVG, StarFillSVG, StarSVG } from "../Svg/SvgContainer";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="flex p-4 flex-col items-center gap-6 flex-1 rounded-2xl border-[0.4px] border-[#C1C79E] w-[336px]">
      {/* Image */}
      <div className="relative w-[304px] h-[204px] rounded-t-2xl border-t border-x border-solid border-secondary-400 overflow-hidden">
        <img
          src="/product-img.png"
          alt="THCA Flower"
          className="size-full object-cover"
        />
        {/* Cart icon */}
        <div className="absolute top-3 left-3 flex p-1 justify-center items-center gap-2.5 rounded-md border border-solid border-secondary-300 bg-secondary-400">
          <CartSVG />
        </div>
        {/* Badge */}
        <div className="absolute top-3 right-3 flex py-1 px-2 justify-center items-center gap-2.5 rounded-md border border-solid border-secondary-300 bg-secondary-400 text-white text-base font-normal leading-6">
          Fresh Stock
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <p className="text-white text-[18px] font-medium leading-[150%]">
            Cheap Indoor THCA Flower Ounce
          </p>
          <div className="flex items-end gap-2 self-stretch">
            <span className="text-[#B4C0C3] text-sm font-medium leading-[150%] line-through">
              $160.99 USD
            </span>
            <span className="text-white text-base font-semibold leading-6">
              $160.99 USD
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 self-stretch">
          <div className="flex gap-0.5">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <span key={i}>
                  <StarFillSVG />
                </span>
              ))}
            <StarSVG />
          </div>
          <span className="text-white text-xl font-semibold leading-[150%]">
            (320)
          </span>
        </div>
      </div>

      {/* button */}
      <Link to={'/products/1'} className="flex px-8 py-4 justify-center items-center gap-[10px] self-stretch rounded-lg bg-[#C1C79E] text-[#051619] text-center text-base font-medium leading-6 cursor-pointer">View Details</Link>
    </div>
  );
};

export default ProductCard;
