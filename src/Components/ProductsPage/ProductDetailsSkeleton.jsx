import React from "react";

const ProductDetailsSkeleton = () => (
  <div className="text-white sm:px-6 py-10 lg:px-16 pt-32 sm:pt-[180px] animate-pulse container">
    {/* Breadcrumbs Skeleton */}
    <div className="flex gap-1 mb-8">
      <div className="h-4 bg-secondary-100/30 rounded w-14" />
      <div className="h-4 bg-secondary-100/30 rounded w-2" />
      <div className="h-4 bg-secondary-100/30 rounded w-16" />
      <div className="h-4 bg-secondary-100/30 rounded w-2" />
      <div className="h-4 bg-secondary-100/30 rounded w-24" />
    </div>

    <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 items-start">
      {/* Image Section */}
      <div className="w-full md:max-w-[703px] flex-1">
        <div className="w-full h-[320px] md:h-[420px] rounded-xl bg-secondary-100/30" />
        <div className="grid grid-cols-4 gap-2 md:gap-4 mt-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-20 rounded-xl bg-secondary-100/30" />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 w-full space-y-6">
        <div className="h-10 bg-secondary-100/30 rounded w-3/4" /> {/* Title */}
        <div className="h-6 bg-secondary-100/30 rounded w-1/4" /> {/* Stars */}
        <div className="h-8 bg-secondary-100/30 rounded w-1/3" /> {/* Price */}
        <div className="h-6 bg-secondary-100/30 rounded w-1/3" /> {/* stock */}
        <div className="h-20 bg-secondary-100/30 rounded w-full" /> {/* Desc */}
        <div className="h-8 bg-secondary-100/30 rounded w-1/3" /> {/* counter */}
        <div className="space-y-4">
          <div className="h-12 bg-secondary-100/30 rounded w-full" />{" "}
          {/* Button 1 */}
          <div className="h-12 bg-secondary-100/30 rounded w-full" />{" "}
          {/* Button 2 */}
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetailsSkeleton;
