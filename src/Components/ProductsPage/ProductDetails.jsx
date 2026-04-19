import React, { useState } from "react";
import { MinusSVG, PlusSVG, StarFillSVG, StarSVG } from "../Svg/SvgContainer";
import { TbPackages } from "react-icons/tb";

const ProductDetails = () => {
  const product = {
    name: "Cheap Indoor THCA Flower Ounce",
    rating: 5,
    reviews: 320,
    oldPrice: 160.99,
    price: 100.99,
    stock: 12,
    description:
      "Affordable indoor THCA flower with strong potency and rich flavors. 1oz (28g) starting at $60 with auto discount.",
    images: [
      "https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
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
          <div className="max-md:max-w-[650px] w-full md:w-[703px] h-[620px] flex-1 rounded-xl overflow-hidden">
            <img
              src={selectedImage}
              alt="Product"
              className="size-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] text-white font-semibold leading-[120%] mb-1 sm:mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 self-stretch mb-1 sm:mb-4">
              <div className="flex gap-0.5">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>
                      <StarFillSVG className={'max-sm:size-4'}/>
                    </span>
                  ))}
                <StarSVG  className={'max-sm:size-4'}/>
              </div>
              <span className="text-white text-sm sm:text-xl font-semibold leading-[150%]">
                (320)
              </span>
            </div>

            <div className="flex items-center gap-4 mb-1 sm:mb-4">
              <span className="text-gray-400 line-through sm:text-lg">
                ${product.oldPrice.toFixed(2)} USD
              </span>
              <span className="text-lg sm:text-3xl font-semibold text-[#d9dfae]">
                ${product.price.toFixed(2)} USD
              </span>
            </div>
            <div className="flex text-[#9dd38c] items-center gap-2 mb-3 sm:mb-6">
              <TbPackages className="size-4 sm:size-5" />
              <p className="font-medium max-sm:font-normal max-sm:text-sm">
                In Stock{" "}
                <span className="text-white leading-[150%]">
                  - {product.stock} items left
                </span>
              </p>
            </div>

            <p className="text-neutral-200 sm:text-white max-sm:text-sm mb-3 sm:mb-6">
              {product.description}
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

            <div className="fle hidden sm:gap-2 xl:gap-4 mt-6 overflow-x-auto">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-xl overflow-hidden border-2 min-w-[100px] flex-1 h-20 ${
                    selectedImage === img
                      ? "border-secondary-100"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
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
