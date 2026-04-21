import React from "react";
import { useAboutUsSectionContent } from "../../Hooks/api/dashboard_api";

const AboutUs = () => {
  return (
    <section className="container py-10 md:py-14">
      <h2 className="section_title sm:mb-8">About Us</h2>
      <p className="section_sub_title max-w-[1008px] mx-auto max-xs:text-sm">
        We started as a small group passionate about quality and transparency,
        with a mission to provide trusted, legal herbal alternatives that
        prioritize your wellbeing.
      </p>
      <AboutUsCards />
    </section>
  );
};

export default AboutUs;

export const AboutUsCards = () => {
  const { data, isLoading } = useAboutUsSectionContent();

  return (
    <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 md:gap-8 mt-12">
      {isLoading
        ?
          [...Array(2)].map((_, index) => <AboutUsCardSkeleton key={index} />)
        : data?.data?.map((item, index) => (
            <div
              key={index}
              className="flex p-4 sm:px-2 md:p-8 flex-col items-center gap-2 sm:gap-4 flex-1 rounded-2xl bg-[#C1C79E33] border border-[#777a64] transition-all duration-300 hover:bg-[#C1C79E4d]"
            >
              {/* Icon Container */}
              <div className="flex size-12 sm:w-16 sm:h-16 sm:px-4 justify-center items-center rounded-full bg-[#0C353C33] border border-[#777a64]">
                <img
                  src={import.meta.env.VITE_SITE_URL + "/" + item?.image}
                  alt={item?.title}
                  className=" object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="sm:space-y-2 text-center">
                <h5 className="text-white text-lg font-semibold leading-tight">
                  {item?.title}
                </h5>
                <p className="text-[#B4C0C3] text-center max-sm:text-sm sm:leading-6">
                  {item?.text}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

const AboutUsCardSkeleton = () => {
  return (
    <div className="flex p-4 sm:px-2 md:p-8 flex-col items-center gap-2 sm:gap-4 flex-1 rounded-2xl bg-[#C1C79E1a] border border-[#777a64] animate-pulse">
      {/* Circle Icon Placeholder */}
      <div className="size-12 sm:size-16 rounded-full bg-[#0C353C33] border border-[#777a64]/50" />

      <div className="w-full flex flex-col items-center gap-3 mt-2">
        {/* Title Placeholder */}
        <div className="h-6 bg-white/10 rounded w-1/3" />

        {/* Paragraph Placeholders */}
        <div className="w-full space-y-2">
          <div className="h-4 bg-white/10 rounded w-full" />
          <div className="h-4 bg-white/10 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
};
