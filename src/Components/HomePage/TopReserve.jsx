import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const TopReserve = () => {
  return (
    <div className="py-14">
      <h2 className="section_title sm:mb-4 px-1">Top Shelf Reserve THCA Flower</h2>
      <p className="section_sub_title px-1">
        Limited Batches Of Rare THCA Strains Crafted By Boutique Growers!
      </p>
      <div className="relative mt-12 py-7 overflow-hidden">
        {/* gradient circles */}
        <div className="gradient_circle -right-24 -top-20 -z-10"></div>
        <div className="gradient_circle -left-24 -bottom-20 -z-10"></div>

        {/* product container */}
        <div className="container justify-center grid min-[620px]:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {Array(4)
            .fill(null)
            ?.map((_, index) => (
              <div key={index} className="">
                <ProductCard />
              </div>
            ))}
        </div>
        {/* button */}
        <div className="mt-8 flex justify-center">
          <Link to={'/products'} className="small_btn">View All</Link>
        </div>
      </div>
    </div>
  );
};

export default TopReserve;
