import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useTopShelfProducts } from "../../Hooks/api/dashboard_api";

const TopReserve = () => {
  const { data, isLoading } = useTopShelfProducts();

  return (
    <div className="py-14">
      <h2 className="section_title sm:mb-4 px-1">
        Top Shelf Reserve THCA Flower
      </h2>
      <p className="section_sub_title px-1">
        Limited Batches Of Rare THCA Strains Crafted By Boutique Growers!
      </p>
      
      <div className="relative mt-12 py-7 overflow-hidden">
        {/* gradient circles */}
        <div className="gradient_circle -right-24 -top-20 -z-10"></div>
        <div className="gradient_circle -left-24 -bottom-20 -z-10"></div>

        {/* product container */}
        <div className="container justify-center grid min-[620px]:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {isLoading
            ? 
              [...Array(4)].map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : 
              data?.data?.map((item, index) => (
                <div key={index}>
                  <ProductCard data={item} />
                </div>
              ))}
        </div>

        {/* button - hidden while loading for cleaner UI */}
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

export default TopReserve;

const ProductCardSkeleton = () => {
  return (
    <div className="flex min-w-[280px] max-w-[350px] w-full h-[370px] flex-col items-start gap-4 rounded-2xl border border-solid border-secondary-100 bg-secondary-500 animate-pulse">
      {/* Image Placeholder */}
      <div className="relative w-full h-[204px] rounded-t-2xl bg-secondary-300/30">
        {/* Cart Icon Placeholder */}
        <div className="absolute top-3 left-3 size-8 rounded-md bg-secondary-300/50" />
      </div>

      {/* Info Placeholder */}
      <div className="flex pt-0 flex-1 px-4 pb-4 flex-col items-start justify-between gap-2 self-stretch w-full">
        {/* Title */}
        <div className="h-6 bg-secondary-300/50 rounded w-3/4 mt-2" />
        
        <div className="space-y-4 w-full">
          {/* Price */}
          <div className="h-5 bg-secondary-300/50 rounded w-1/2" />
          
          {/* Stars & Count */}
          <div className="flex items-center gap-2 self-stretch">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="size-4 bg-secondary-300/50 rounded-full" />
              ))}
            </div>
            <div className="h-5 bg-secondary-300/50 rounded w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
