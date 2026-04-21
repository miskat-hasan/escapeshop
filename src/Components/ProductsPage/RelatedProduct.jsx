import React from "react";
import Marquee from "react-fast-marquee";
import ProductCard from "./ProductCard";

const RelatedProduct = ({ data }) => {
  return (
    <div className="container pb-[110px] pt-[60px]">
      <h4 className="text-white text-[24px] font-semibold leading-[150%]">
        Related Products
      </h4>
      <div className="mt-12 space-x-6">
        <Marquee pauseOnHover autoFill>
          {data?.map((item, index) => (
            <div key={index} className="mr-1.5 sm:mr-3 lg:mr-5">
              <ProductCard item={item} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default RelatedProduct;
