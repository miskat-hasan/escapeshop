import React from "react";

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
                <div
                  key={i}
                  className="size-4 bg-secondary-300/50 rounded-full"
                />
              ))}
            </div>
            <div className="h-5 bg-secondary-300/50 rounded w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
