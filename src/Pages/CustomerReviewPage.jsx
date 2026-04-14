import React from "react";
import PageHeader from "../Components/Common/PageHeader";
import ReviewCard from "../Components/ReviewCard";

const CustomerReviewPage = () => {
  return (
    <div>
      {/* header */}
      <div
        className={`relative h-[440px] 2xl:h-[500px] flex items-end pb-11 justify-center bg-cover bg-bottom bg-[linear-gradient(111deg,rgba(0,33,21,0.8)_45.72%,rgba(12,53,60,0.2)_98.54%),url('/review-bg.png')]`}
      >
        <div className="relative z-10 p-8 container">
          <h1 className="text-white text-center font-['Playfair_Display'] text-[64px] font-semibold leading-[120%] mb-8">
            Trusted by Our Community
          </h1>
          <p className="text-[#B4C0C3] text-center text-2xl font-normal leading-[150%] max-w-[1050px] mx-auto">
            Honest feedback from our growing community of satisfied customers.
            Discover real experiences with our premium THCA products and trusted
            service.
          </p>
        </div>
        <div className="absolute w-full h-[180px] -bottom-5 bg-[url('/hero-bottom-gradient.png')] bg-no-repeat" />
      </div>

      {/* review cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 pt-20 pb-[110px] container">
        {Array(9)
          .fill(null)
          ?.map((_, index) => (
            <div key={index}>
              <ReviewCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomerReviewPage;
