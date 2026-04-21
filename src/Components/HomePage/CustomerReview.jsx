import React from "react";
import { StarFillSVG, StarSVG } from "../Svg/SvgContainer";
import { Link } from "react-router-dom";
import { useGetAllReviews } from "../../Hooks/api/dashboard_api";

const CustomerReview = () => {
  const { data, isLoading } = useGetAllReviews(1);

  const reviews = data?.data?.data?.slice(0, 6) || [];

  return (
    <div className="container py-14">
      <h2 className="section_title sm:mb-4">What Our Customers Say</h2>
      <p className="section_sub_title">Hear from our satisfied customers</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 my-8">
        {isLoading
          ? [...Array(6)].map((_, index) => (
              <ReviewSectionSkeleton key={index} />
            ))
          : reviews.map((item, index) => (
              <div
                key={index}
                className="flex p-3 sm:p-6 flex-col items-start gap-4 flex-1 rounded-[10px] bg-primary/20 border border-transparent hover:border-primary/30 transition-all duration-300"
              >
                {/* Stars Logic based on rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < item?.rating ? (
                        <StarFillSVG className={"max-sm:size-4"} />
                      ) : (
                        <StarSVG className={"max-sm:size-4"} />
                      )}
                    </span>
                  ))}
                </div>

                {/* Review Description */}
                <div className="text-[#E7EBEC] max-sm:text-sm font-normal leading-6 italic">
                  "{item?.comment || "No comment provided."}"
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-between w-full mt-auto">
                  <h6 className="text-[#F9FAFB] text-base font-medium leading-6">
                    {item?.user?.name || "Anonymous"}
                  </h6>
                  {item?.user?.is_verified && (
                    <p className="text-[#84CC16] text-xs font-normal leading-4">
                      ✓ Verified
                    </p>
                  )}
                </div>
              </div>
            ))}
      </div>

      {/* Button */}
      {!isLoading && (
        <div className="mt-8 flex justify-center">
          <Link to={"/customer-review"} className="small_btn">
            View All
          </Link>
        </div>
      )}
    </div>
  );
};

export default CustomerReview;

const ReviewSectionSkeleton = () => {
  return (
    <div className="flex p-3 sm:p-6 flex-col items-start gap-4 flex-1 rounded-[10px] bg-primary/10 animate-pulse border border-white/5">
      {/* Stars Placeholder */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="size-4 bg-white/10 rounded-full" />
        ))}
      </div>

      {/* Description Placeholder */}
      <div className="w-full space-y-2">
        <div className="h-4 bg-white/10 rounded w-full" />
        <div className="h-4 bg-white/10 rounded w-5/6" />
        <div className="h-4 bg-white/10 rounded w-4/6" />
      </div>

      {/* Footer Placeholder */}
      <div className="flex items-center justify-between w-full mt-2">
        <div className="h-4 bg-white/10 rounded w-20" />
        <div className="h-3 bg-white/10 rounded w-12" />
      </div>
    </div>
  );
};
