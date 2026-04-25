import React from "react";
import { CartSVG, StarFillSVG, StarSVG } from "../Svg/SvgContainer";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ data }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(data, 1);
    toast.success(`${data?.name} added to cart`);
  };

  return (
    <div className="flex min-w-[280px] max-w-[350px] w-full h-full flex-col items-start gap-4 rounded-2xl border border-solid border-secondary-100 bg-secondary-500">
      {/* Image */}
      <div className="relative w-full h-[204px] rounded-t-2xl overflow-hidden">
        <img
          src={import.meta.env.VITE_SITE_URL + "/" + data?.thumbnail_image}
          alt="THCA Flower"
          className="size-full object-cover"
        />
        {/* Cart icon — adds to cart */}
        <button
          onClick={handleAddToCart}
          className="absolute top-3 left-3 flex p-1 justify-center items-center gap-2.5 rounded-md border border-solid border-secondary-300 bg-secondary-400 cursor-pointer hover:bg-secondary-500 transition duration-300"
        >
          <CartSVG />
        </button>
        {/* Badge */}
        {data?.badge && (
          <div className="absolute top-3 right-3 flex py-1 px-2 justify-center items-center gap-2.5 rounded-md border border-solid border-secondary-300 bg-secondary-400 text-white max-sm:text-sm font-normal leading-6">
            {data?.badge}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex pt-0 flex-1 px-4 pb-4 flex-col items-start justify-between gap-2 self-stretch">
        <Link
          to={`/products/${data?.id}`}
          className="text-white hover:text-primary transition duration-300 text-lg font-normal leading-[28px]"
        >
          {data?.name}
        </Link>
        <div className="space-y-3">
          {data?.sell_price ? (
            <div className="flex items-end gap-2 self-stretch mt-auto">
              <span className="text-[#E7EBEC] text-sm font-medium leading-[150%] line-through">
                ${data?.price} USD
              </span>
              <span className="text-white text-base font-semibold leading-6">
                ${data?.sell_price} USD
              </span>
            </div>
          ) : (
            <span className="text-white text-base font-semibold leading-6">
              ${data?.price} USD
            </span>
          )}
          <div className="flex items-center gap-2 self-stretch">
            <div className="flex gap-0.5">
              {Array(Math.floor(data?.reviews_avg_rating || 0))
                .fill(null)
                .map((_, i) => (
                  <span key={`full-${i}`}>
                    <StarFillSVG className={"max-sm:size-4"} />
                  </span>
                ))}
              {Array(5 - Math.floor(data?.reviews_avg_rating || 0))
                .fill(null)
                .map((_, i) => (
                  <span key={`empty-${i}`}>
                    <StarSVG className={"max-sm:size-4"} />
                  </span>
                ))}
            </div>
            <span className="text-white sm:text-xl font-semibold leading-[150%]">
              ({data?.reviews_count})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
