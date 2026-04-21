import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useGreenAuraProducts } from "../../Hooks/api/dashboard_api";
import ProductCardSkeleton from "./ProductCardSkeleton";

const GreenAura = () => {
  const { data, isLoading } = useGreenAuraProducts();

  return (
    <div className="py-14">
      <h2 className="section_title sm:mb-4 px-1">
        Green Aura Assist Greenhouse THCA Flower
      </h2>
      <p className="section_sub_title px-1">
        Exceptional Quality At Great Value! Shop Our Newest THCA Flower Selection Across Various Strains.
      </p>

      <div className="relative mt-12 py-7 overflow-hidden">
        {/* gradient circles */}
        <div className="gradient_circle -right-24 -top-20 -z-10"></div>
        <div className="gradient_circle -left-24 -bottom-20 -z-10"></div>

        {/* product container */}
        <div className="container justify-center grid min-[620px]:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {isLoading
            ? [...Array(4)].map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : data?.data?.green_aura?.map((item, index) => (
                <div key={index}>
                  <ProductCard data={item} />
                </div>
              ))}
        </div>

        {/* button */}
        {!isLoading && (
          <div className="mt-8 flex justify-center">
            <Link to={"/products"} className="small_btn">
              View All
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GreenAura;
