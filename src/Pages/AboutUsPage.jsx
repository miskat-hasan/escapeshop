import React from "react";
import { AboutUsCards } from "../Components/HomePage/AboutUs";
import MissionVision from "../Components/AboutUsPage/MissionVision";
import TrustLegality from "../Components/AboutUsPage/TrustLegality";
import { useAboutContent } from "../Hooks/api/dashboard_api";

const AboutUsPage = () => {
  const { data, isLoading } = useAboutContent();

  return (
    <div>
      {/* header */}
      <div
        className={`relative h-[350px] md:h-[440px] 2xl:h-[500px] flex items-end md:pb-11 justify-center bg-cover bg-bottom bg-[linear-gradient(111deg,rgba(0,33,21,0.8)_45.72%,rgba(12,53,60,0.2)_98.54%),url('/about-us/header-bg.png')]`}
      >
        <div className="relative z-10 p-8 container">
          <h1 className="text-white text-center font-police text-4xl md:text-[64px] leading-[120%] mb-3 md:mb-8">
            {data?.data?.main_title}
          </h1>
          <p className="text-[#B4C0C3] text-center text-lg md:text-2xl font-normal leading-[150%] max-w-[1050px] mx-auto">
            {data?.data?.main_description}
          </p>
        </div>
        <div className="absolute w-full h-[180px] -bottom-5 bg-[url('/hero-bottom-gradient.png')] bg-no-repeat" />
      </div>
      <MissionVision data={data?.data} />
      <div className="container">
        <AboutUsCards />
      </div>
      <TrustLegality />
    </div>
  );
};

export default AboutUsPage;
