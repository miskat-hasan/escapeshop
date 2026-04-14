import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set the speed to 50%
      videoRef.current.playbackRate = .7;
    }
  }, []);
  return (
    <div className="relative h-[900px] w-full overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 min-w-full min-h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0  z-10 bg-[linear-gradient(111deg,rgba(0,33,21,0.8)_45.72%,rgba(12,53,60,0.16)_98.54%)]" />
      <div className="relative z-10 p-8">
        <h1 className="text-white text-center font-['Playfair_Display'] text-[64px] font-semibold leading-[120%] mb-8">
          Find Balance in Every Moment
        </h1>
        <p className="text-[#B4C0C3] text-center text-2xl font-normal leading-9 max-w-[658px] mx-auto">
          Discover ethically sourced. Legal herbal smoking blends and wellness
          essentials crafted for the modern souls.
        </p>
        <div className="flex items-center gap-4 mt-12 justify-center">
          <Link
            to={""}
            className="flex py-3 px-6 justify-center items-center gap-[10px] rounded-lg bg-[#C1C79E] text-[#051619] text-center text-base font-medium leading-6"
          >
            Show Now
          </Link>
          <Link
            to={""}
            className="flex py-3 px-6 justify-center items-center gap-[10px] rounded-lg bg-[#0C353C] text-[#FEFFFF] text-center text-base font-medium leading-6"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute w-full h-[180px] -bottom-3 bg-[url('/hero-bottom-gradient.png')] bg-no-repeat" />
    </div>
  );
};

export default HeroSection;
