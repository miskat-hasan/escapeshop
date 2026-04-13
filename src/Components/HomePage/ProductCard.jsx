import React from "react";
import { CartSVG, StarFillSVG, StarSVG } from "../Svg/SvgContainer";

const ProductCard = () => {
  return (
    <div className="flex w-[305px] flex-col items-start gap-4 rounded-2xl border border-solid border-secondary-400 bg-secondary-500">
      {/* Image */}
      <div className="relative w-[305px] h-[204px] rounded-t-2xl border-t border-x border-solid border-secondary-400 overflow-hidden">
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
      <div className="flex pt-0 px-4 pb-4 flex-col items-start gap-2 self-stretch">
        <p className="text-white text-lg font-normal leading-[28px]">
          Cheap Indoor THCA Flower Ounce
        </p>
        <div className="flex items-end gap-2 self-stretch">
          <span className="text-[#E7EBEC] text-sm font-medium leading-[150%] line-through">
            $160.99 USD
          </span>
          <span className="text-white text-base font-semibold leading-6">
            $160.99 USD
          </span>
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
    </div>
  );
};

export default ProductCard;
