import React, { useState } from "react";
import { MinusSVG, PlusSVG, TrashBinSVG } from "../Svg/SvgContainer";

const OrderCard = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col sm:flex-row w-full p-3 md:p-4 items-start sm:items-center gap-3 md:gap-4 self-stretch rounded-2xl border-[0.4px] border-[#C1C79E]">
      {/* product image */}
      <div className="w-full sm:w-[141px] h-48 sm:h-[134px] rounded-lg border border-[#C1C79E] overflow-hidden flex-shrink-0">
        <img
          src="/product-img.png"
          alt="product"
          className="size-full object-cover"
        />
      </div>
      {/* content */}
      <div className="space-y-3 md:space-y-4 flex-1 w-full min-w-0">
        <p className="text-[#E7EBEC] text-lg md:text-2xl font-medium leading-[150%] truncate">
          Cheap Indoor THCA Flower Ounce
        </p>
        <p className="text-[#E7EBEC] text-lg md:text-2xl font-medium leading-[150%]">
          Price: $160.99
        </p>
        <div className="w-full flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 md:gap-4">
            <p className="text-[#B4C0C3] text-base md:text-2xl font-medium leading-[150%]">
              Quantity: 1
            </p>
            <div className="flex h-10 md:h-12 px-2 py-3 justify-center items-center gap-[10px] rounded-2xl border-[0.4px] border-secondary-100">
              <button
                onClick={decrement}
                className="flex w-6 h-6 justify-center items-center gap-[10px] aspect-square rounded-lg border border-white/80 cursor-pointer"
              >
                <MinusSVG />
              </button>
              <span className="text-white min-w-[24px] text-center text-[16px] md:text-[18px] font-semibold leading-[150%]">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="flex w-6 h-6 justify-center items-center gap-[10px] aspect-square rounded-lg border border-white/80 cursor-pointer"
              >
                <PlusSVG />
              </button>
            </div>
          </div>
          <button className="size-9 flex items-center justify-center bg-primary rounded-[10px] cursor-pointer">
            <TrashBinSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;