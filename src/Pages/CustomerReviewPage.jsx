import React, { useState } from "react";
import PageHeader from "../Components/Common/PageHeader";
import ReviewCard from "../Components/ReviewCard";
import { useGetAllReviews } from "../Hooks/api/dashboard_api";

const CustomerReviewPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllReviews(page);

  return (
    <div>
      {/* header */}
      <div
        className={`relative h-[350px] md:h-[440px] 2xl:h-[500px] flex items-end md:pb-11 justify-center bg-cover bg-bottom bg-[linear-gradient(111deg,rgba(0,33,21,0.8)_45.72%,rgba(12,53,60,0.2)_98.54%),url('/review-bg.png')]`}
      >
        <div className="relative z-10 p-8 container">
          <h1 className="text-white text-center font-police text-4xl md:text-[64px] leading-[120%] mb-3 md:mb-8">
            Trusted by Our Community
          </h1>
          <p className="text-[#B4C0C3] text-center md:text-2xl font-normal leading-[150%] max-w-[1050px] mx-auto">
            Honest feedback from our growing community of satisfied customers.
            Discover real experiences with our premium THCA products and trusted
            service.
          </p>
        </div>
        <div className="absolute w-full h-[180px] -bottom-5 bg-[url('/hero-bottom-gradient.png')] bg-no-repeat" />
      </div>
      {/* review cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-9 pt-20 pb-8 container">
        {isLoading ? (
          [...Array(6)].map((_, index) => <ReviewCardSkeleton key={index} />)
        ) : data?.data?.data?.length > 0 ? (
          data?.data?.data?.map((item, index) => (
            <div key={index}>
              <ReviewCard data={item} />
            </div>
          ))
        ) : (
          <div className="py-10 text-lg text-center w-full">No data found </div>
        )}
      </div>

      {/* Pagination */}
      {!isLoading && data?.data?.links && (
        <div className="flex container flex-col md:flex-row items-center justify-center mt-3 lg:mt-6 pb-8 gap-3">
          <div className="flex items-center gap-2">
            {data?.data?.links?.map((link, index) => (
              <button
                key={index}
                disabled={link.url === null || link.page === null}
                onClick={() => link.page && setPage(link.page)}
                className={`px-3 sm:px-4 sm:py-2 py-1 text-sm border rounded-md ${
                  link.active
                    ? "border-secondary-100 text-white bg-[#C1C79E99]"
                    : "hover:bg-[#d3d8b999] border-secondary-100"
                } ${
                  link.url === null || link.page === null
                    ? "text-gray-400 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviewPage;

const ReviewCardSkeleton = () => {
  return (
    <div className="flex min-w-[300px] h-[415px] mx-auto w-full max-w-[407px] p-2 md:p-4 flex-col items-start gap-3 rounded-2xl border border-secondary-100 bg-[#C1C79E]/20 animate-pulse">
      {/* Product Image Skeleton */}
      <div className="h-[200px] xl:h-[240px] w-full rounded-t-2xl bg-secondary-100/50" />

      {/* Review Text Skeleton */}
      <div className="w-full space-y-2">
        <div className="h-4 bg-secondary-100/50 rounded w-full" />
        <div className="h-4 bg-secondary-100/50 rounded w-5/6" />
      </div>

      {/* Stars Skeleton */}
      <div className="flex gap-1 mt-auto">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="size-4 bg-secondary-100/50 rounded-full" />
        ))}
      </div>

      {/* User Info Skeleton */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-secondary-100/50" />
          <div className="h-4 bg-secondary-100/50 rounded w-20" />
        </div>
        <div className="h-4 bg-secondary-100/50 rounded w-16" />
      </div>
    </div>
  );
};
