import React from "react";

const MissionVision = ({ data }) => {
  return (
    <div className="pt-20 container pb-16 space-y-[110px]">
      {/* our story */}
      <div className="flex max-lg:flex-col items-center gap-8 lg:gap-6 xl:gap-[77px]">
        {/* left side - image */}
        <div
          className="lg:flex-1 max-w-[622px] w-full h-[300px] sm:h-[350px] lg:h-[415px] rounded-2xl border-[0.4px] border-secondary-100 bg-center bg-cover bg-no-repeat shadow-[0_12px_24px_-4px_rgba(145,158,171,0.16)]"
          style={{ backgroundImage: `url(${data?.story_image})` }}
        />

        {/* right side - text content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-primary text-4xl md:text-[40px] leading-[120%] font-police">
            {data?.story_title}
          </h3>
          <p className="text-[#F9FAFB] text-base font-normal leading-6">
            {data?.story_description}
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="flex max-lg:flex-col-reverse items-center gap-8 lg:gap-6 xl:gap-[77px]">
        {/* left side - text content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-primary text-4xl md:text-[40px] font-police leading-[120%]">
            {data?.mission_title}
          </h3>
          <p className="text-[#F9FAFB] text-base font-normal leading-6">
            {data?.mission_description}
          </p>
        </div>
        {/* right side - image */}
        <div
          className="lg:flex-1 max-w-[622px] w-full h-[300px] sm:h-[350px] lg:h-[415px] rounded-2xl border-[0.4px] border-secondary-100 bg-center bg-cover bg-no-repeat shadow-[0_12px_24px_-4px_rgba(145,158,171,0.16)]"
          style={{ backgroundImage: `url(${data?.mission_image})` }}
        />
      </div>

      {/* our vision */}
      <div className="flex max-lg:flex-col items-center gap-8 lg:gap-6 xl:gap-[77px]">
        {/* left side - image */}
        <div
          className="lg:flex-1 max-w-[622px] w-full h-[300px] sm:h-[350px] lg:h-[415px] rounded-2xl border-[0.4px] border-secondary-100 bg-center bg-cover bg-no-repeat shadow-[0_12px_24px_-4px_rgba(145,158,171,0.16)]"
          style={{ backgroundImage: `url(${data?.vision_image})` }}
        />

        {/* right side - text content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-primary text-4xl md:text-[40px] font-police leading-[120%]">
            {data?.vision_title}
          </h3>
          <p className="text-[#F9FAFB] text-base font-normal leading-6">
            {data?.vision_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
