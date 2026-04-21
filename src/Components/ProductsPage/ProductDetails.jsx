import React, { useEffect, useState } from "react";
import { MinusSVG, PlusSVG, StarFillSVG, StarSVG } from "../Svg/SvgContainer";
import { TbPackages } from "react-icons/tb";

const ProductDetails = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(
    product?.gallery?.[0]?.image || "",
  );

  useEffect(() => {
    if (product?.gallery?.[0]?.image) {
      setSelectedImage(product.gallery[0].image);
    }
  }, [product]);

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    console.log("Add to cart:", { product, quantity });
  };

  const handleBuyNow = () => {
    console.log("Buy now:", { product, quantity });
  };

  return (
    <div className="text-white sm:px-6 py-10 lg:px-16 pt-32 sm:pt-[180px]">
      <div className="container">
        <div className="flex items-center gap-2 mb-4 sm:mb-8">
          <span className="text-white text-sm sm:text-[18px] font-normal leading-[150%]">
            Home
          </span>
          <span className="text-[#B4C0C3] text-sm font-normal leading-5">
            {" "}
            /{" "}
          </span>
          <span className="text-white text-sm sm:text-[18px] font-normal leading-[150%]">
            Product
          </span>
          <span className="text-[#B4C0C3] text-sm font-normal leading-5">
            {" "}
            /{" "}
          </span>

          <span className="text-[#C1C79E] text-sm sm:text-[18px] font-normal leading-[150%]">
            Product Details
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 items-start">
          <div className="max-md:max-w-[650px] w-full md:max-w-[703px] flex-1">
            <div className="max-md:max-w-[650px] w-full md:max-w-[703px] max-sm:h-[280px] md:h-[420px] rounded-xl overflow-hidden">
              <img
                src={import.meta.env.VITE_SITE_URL + "/" + selectedImage}
                alt="Product"
                className="size-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 sm:gap-2 xl:gap-4 mt-3 sm:mt-5 overflow-x-auto">
              {product?.gallery?.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(item?.image)}
                  className={`rounded-xl cursor-pointer overflow-hidden border-2 flex-1 h-20 ${
                    selectedImage === item?.image
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={import.meta.env.VITE_SITE_URL + "/" + item?.image}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] text-white font-semibold leading-[120%] mb-1 sm:mb-3">
              {product?.name}
            </h1>

            <div className="flex items-center gap-2 self-stretch mb-1 sm:mb-4">
              <div className="flex gap-0.5">
                {Array(Math.floor(product?.reviews_avg_rating || 0))
                  .fill(null)
                  .map((_, i) => (
                    <span key={`full-${i}`}>
                      <StarFillSVG className={"max-sm:size-4"} />
                    </span>
                  ))}

                {Array(5 - Math.floor(product?.reviews_avg_rating || 0))
                  .fill(null)
                  .map((_, i) => (
                    <span key={`empty-${i}`}>
                      <StarSVG className={"max-sm:size-4"} />
                    </span>
                  ))}
              </div>
              <span className="text-white text-sm sm:text-xl font-semibold leading-[150%]">
                ({product?.reviews_count})
              </span>
            </div>

            <div className="flex items-center gap-4 mb-1 sm:mb-4">
              <span className="text-gray-400 line-through sm:text-lg">
                ${product?.price} USD
              </span>
              <span className="text-lg sm:text-3xl font-semibold text-[#d9dfae]">
                ${product?.sell_price} USD
              </span>
            </div>
            <div className="flex text-[#9dd38c] items-center gap-2 mb-3 sm:mb-6">
              <TbPackages className="size-4 sm:size-5" />
              <p className="font-medium max-sm:font-normal max-sm:text-sm">
                {product?.stock_status}
                {/* <span className="text-white leading-[150%]">
                  - {product.stock} items left
                </span> */}
              </p>
            </div>

            <p className="text-neutral-200 sm:text-white max-sm:text-sm mb-3 sm:mb-6">
              {product?.description}
            </p>

            <div className="flex mb-3 sm:mb-6">
              <div className="flex h-11 sm:h-12 px-2 sm:px-4 py-3 justify-center items-center gap-2.5 rounded-lg border-[0.4px] border-secondary-100">
                <button
                  onClick={decrement}
                  className="flex w-6 h-6 justify-center items-center gap-2.5 aspect-square rounded-lg border border-white/80 cursor-pointer"
                >
                  <MinusSVG />
                </button>
                <span className="text-white min-w-6 text-center sm:text-[18px] font-semibold leading-[150%]">
                  {quantity}
                </span>
                <button
                  onClick={increment}
                  className="flex w-6 h-6 justify-center items-center gap-2.5 aspect-square rounded-lg border border-white/80 cursor-pointer"
                >
                  <PlusSVG />
                </button>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-6">
              <button
                onClick={handleAddToCart}
                className="flex w-full h-11 sm:h-12 px-4 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg border-[0.4px] border-secondary-100 text-white text-center text-base font-medium leading-[150%] cursor-pointer"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex h-11 sm:h-12 px-4 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg border border-[#C1C79E] bg-[#C1C79E] text-[#051619] text-center text-base font-medium leading-[150%] w-full"
              >
                Buy Now
              </button>
            </div>

            <div className="max-lg: hidden  grid-cols-4 sm:gap-2 xl:gap-4 mt-6 overflow-x-auto">
              {product?.gallery?.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(item?.id)}
                  className={`rounded-xl overflow-hidden border-2 flex-1 h-20 ${
                    selectedImage === item?.id
                      ? "border-secondary-100"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={import.meta.env.VITE_SITE_URL + "/" + item?.image}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
