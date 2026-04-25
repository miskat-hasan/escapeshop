import React from "react";
import { AboutUsCards } from "../Components/HomePage/AboutUs";
import MissionVision from "../Components/AboutUsPage/MissionVision";
import TrustLegality from "../Components/AboutUsPage/TrustLegality";
import { useAboutContent } from "../Hooks/api/dashboard_api";

const AboutUsPage = () => {
  const { data, isLoading } = useAboutContent();

  return (
    <div>
      <div className="relative h-[350px] md:h-[440px] 2xl:h-[500px] flex items-end md:pb-11 justify-center bg-cover bg-bottom bg-[linear-gradient(111deg,rgba(0,33,21,0.8)_45.72%,rgba(12,53,60,0.2)_98.54%),url('/about-us/header-bg.png')]">
        <div className="relative z-10 p-8 container">
          <h1 className="text-white text-center font-police text-4xl md:text-[64px] leading-[120%] mb-3 md:mb-8">
            About EscapeShop
          </h1>
          <p className="text-[#B4C0C3] text-center text-lg md:text-2xl font-normal leading-[150%] max-w-[1050px] mx-auto">
            Delivering premium THCA products with unmatched quality and care.
          </p>
        </div>
        <div className="absolute w-full h-[180px] -bottom-5 bg-[url('/hero-bottom-gradient.png')] bg-no-repeat" />
      </div>

      {/* Main Content Sections */}
      {isLoading ? (
        <>
          <MissionVisionSkeleton />
        </>
      ) : (
        <>
          <MissionVision data={data?.data} />
        </>
      )}

      <div className="container">
        <AboutUsCards />
      </div>
      
      {isLoading ? (
        <>
          <TrustLegalitySkeleton />
        </>
      ) : (
        <>
          <TrustLegality data={data?.data?.features} />
        </>
      )}
    </div>
  );
};

export default AboutUsPage;

const MissionVisionSkeleton = () => (
  <div className="pt-20 container pb-16 space-y-[110px] animate-pulse">
    {[1, 2, 3].map((item, idx) => (
      <div
        key={idx}
        className={`flex max-lg:flex-col items-center gap-8 lg:gap-6 xl:gap-[77px] ${idx === 1 ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Image Box Skeleton */}
        <div className="lg:flex-1 max-w-[622px] w-full h-[300px] sm:h-[350px] lg:h-[415px] rounded-2xl bg-white/5 border border-white/10" />

        {/* Text Content Skeleton */}
        <div className="flex-1 space-y-4 w-full">
          <div className="h-10 w-48 bg-white/20 rounded-md"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-white/5 rounded"></div>
            <div className="h-4 w-full bg-white/5 rounded"></div>
            <div className="h-4 w-5/6 bg-white/5 rounded"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const TrustLegalitySkeleton = () => (
  <div className="container py-[110px] animate-pulse">
    <div className="flex p-6 flex-col justify-center items-start gap-6 self-stretch rounded-2xl bg-secondary-400/10 border border-secondary-100">
      <div className="h-8 w-48 bg-white/10 rounded self-center mt-6"></div>
      <div className="w-full space-y-6 mt-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-5 w-32 bg-white/20 rounded"></div>
            <div className="h-4 w-full bg-white/5 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
