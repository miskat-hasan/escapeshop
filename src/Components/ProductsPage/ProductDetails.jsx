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
    <div className="min-h-screen text-white px-6 py-10 lg:px-16 pt-[180px]">
      
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-white text-[18px] font-normal leading-[150%]">
            Home
          </span>
          <span className="text-[#B4C0C3] text-sm font-normal leading-5">
            {" "}
            /{" "}
          </span>
          <span className="text-white text-[18px] font-normal leading-[150%]">
            Product
          </span>
          <span className="text-[#B4C0C3] text-sm font-normal leading-5">
            {" "}
            /{" "}
          </span>

          <span className="text-[#C1C79E] text-[18px] font-normal leading-[150%]">
            Product Details
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-[703px] h-[620px] rounded-xl overflow-hidden">
            <img
              src={selectedImage}
              alt="Product"
              className="size-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl lg:text-[40px] text-white font-semibold leading-[120%] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 self-stretch mb-4">
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

            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-400 line-through text-lg">
                ${product.oldPrice.toFixed(2)} USD
              </span>
              <span className="text-3xl font-semibold text-[#d9dfae]">
                ${product.price.toFixed(2)} USD
              </span>
            </div>
            <div className="flex text-[#9dd38c] items-center gap-2 mb-6">
              <TbPackages className="size-5" />
              <p className="font-medium">
                In Stock{" "}
                <span className="text-white text-base font-medium leading-[150%]">
                  - {product.stock} items left
                </span>
              </p>
            </div>

            <p className="text-white text-base font-normal leading-6 mb-6">
              {product.description}
            </p>

            <div className="flex mb-6">
              <div className="flex h-12 px-4 py-3 justify-center items-center gap-[10px] rounded-lg border-[0.4px] border-secondary-100">
                <button
                  onClick={decrement}
                  className="flex w-6 h-6 justify-center items-center gap-[10px] aspect-square rounded-lg border border-white/80 cursor-pointer"
                >
                  <MinusSVG />
                </button>
                <span className="text-white min-w-[24px] text-center text-[18px] font-semibold leading-[150%]">
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

            <div className="space-y-6">
              <button
                onClick={handleAddToCart}
                className="flex w-full h-12 px-4 py-3 justify-center items-center gap-[10px] self-stretch rounded-lg border-[0.4px] border-secondary-100 text-white text-center text-base font-medium leading-[150%] cursor-pointer"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex h-12 px-4 py-3 justify-center items-center gap-[10px] self-stretch rounded-lg border border-[#C1C79E] bg-[#C1C79E] text-[#051619] text-center text-base font-medium leading-[150%] w-full"
              >
                Buy Now
              </button>
            </div>

            <div className="flex gap-4 mt-6 overflow-x-auto">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-xl overflow-hidden border-2 min-w-[100px] flex-1 h-20 ${
                    selectedImage === img
                      ? "border-[#d9dfae]"
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
