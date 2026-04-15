import React from "react";
import Marquee from "react-fast-marquee";
import ProductCard from "./ProductCard";

const RelatedProduct = () => {
  return (
    <div className="container pb-[110px] pt-[60px]">
      <h4 className="text-white text-[24px] font-semibold leading-[150%]">
        Related Products
      </h4>
      <div className="mt-12 space-x-6">
        <Marquee className="space-x-6">
          {Array(6)
            .fill(null)
            ?.map((_, index) => (
              <div key={index} className="mx-3">
                <ProductCard />
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default RelatedProduct;
