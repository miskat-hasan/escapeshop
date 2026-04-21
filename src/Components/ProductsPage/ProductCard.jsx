import React from "react";
import { CartSVG, StarFillSVG, StarSVG } from "../Svg/SvgContainer";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="flex sm:p-2 xl:p-4 flex-col items-center gap-1.5 sm:gap-3 xl:gap-6 flex-1 rounded-lg sm:rounded-2xl border-[0.4px] border-secondary-100 max-w-[336px] w-full mx-auto">
      {/* Image */}
      <div className="relative w-full sm:max-w-[300px] 2xl:w-[304px] h-[130px] xs:h-[150px] sm:h-[204px] rounded-t-lg border border-solid border-secondary-100 overflow-hidden">
        <img
          src={import.meta.env.VITE_SITE_URL + "/" + item?.thumbnail_image}
          alt={item?.name}
          className="size-full object-cover"
        />
        {/* Cart icon */}
        <div className="absolute top-1 sm:top-3 left-1 sm:left-3 flex p-1 justify-center items-center rounded-md border border-solid border-secondary-300 bg-secondary-400">
          <CartSVG className={"max-sm:size-5"} />
        </div>
        {/* Badge */}
        <div className="absolute top-1 sm:top-3 right-1 sm:right-3 flex sm:py-1 px-2 justify-center items-center gap-2.5 rounded-md border border-solid border-secondary-300 bg-secondary-400 text-white text-xs sm:text-sm xl:text-base font-normal leading-6">
          {item?.badge}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col sm:gap-2 xl:gap-4 max-sm:px-1 w-full">
        <div className="space-y-1">
          <p className="text-white text-sm sm:text-[18px] sm:font-medium sm:leading-[150%]">
            {item?.name}
          </p>
          <div className="flex sm:items-end gap-1 sm:gap-2 self-stretch">
            <span className="text-[#B4C0C3] text-xs sm:text-sm font-medium leading-[150%] line-through">
              ${item?.price} USD
            </span>
            <span className="text-white text-xs xs:text-sm sm:text-base font-semibold leading-6">
              ${item?.sell_price} USD
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 self-stretch">
          <div className="flex gap-0.5">
            {Array(Math.floor(item?.reviews_avg_rating || 0))
              .fill(null)
              .map((_, i) => (
                <span key={`full-${i}`}>
                  <StarFillSVG className={"max-sm:size-3 max-xl:size-4"} />
                </span>
              ))}

            {Array(5 - Math.floor(item?.reviews_avg_rating || 0))
              .fill(null)
              .map((_, i) => (
                <span key={`empty-${i}`}>
                  <StarSVG className={"max-sm:size-3 max-xl:size-4"} />
                </span>
              ))}
          </div>
          <span className="text-white max-sm:text-sm xl:text-xl font-semibold leading-[150%]">
            ({item?.reviews_count})
          </span>
        </div>
      </div>

      {/* button */}
      <Link
        to={`/products/${item?.id}`}
        className="flex max-sm:mx-1 max-sm:mb-2 px-8 py-1.5 sm:py-2.5 xl:py-4 justify-center items-center gap-[10px] self-stretch rounded-lg bg-[#C1C79E] text-[#051619] text-center text-sm sm:text-base font-medium leading-6 cursor-pointer"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
