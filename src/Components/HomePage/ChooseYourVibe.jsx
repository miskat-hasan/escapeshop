import React from "react";
import {
  BoostSVG,
  BulbSVG,
  CalmSVG,
  RestSVG,
  SmileFaceSVG,
} from "../Svg/SvgContainer";

const contents = [
  {
    icon: CalmSVG,
    title: "Calm",
    description: "Relax your mind & body",
  },
  {
    icon: BoostSVG,
    title: "Boost",
    description: "Feel the energy rise",
  },
  {
    icon: SmileFaceSVG,
    title: "Happy",
    description: "Lift your mood instantly",
  },
  {
    icon: RestSVG,
    title: "Rest",
    description: "Drift into deep sleep",
  },
  {
    icon: BulbSVG,
    title: "Creative",
    description: "Unlock your creativity",
  },
];

const ChooseYourVibe = () => {
  return (
    <div className="container py-14">
      <h2 className="section_title mb-4">Choose Your Vibe</h2>
      <p className="section_sub_title">Find the perfect strain for your mood</p>
      <div className="mt-12 grid @max-xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {contents?.map((item, index) => (
          <div
            key={index}
            className="flex w-[239.2px] p-4 flex-col items-center gap-4 shrink-0 rounded-2xl border-[0.4px] border-solid border-[#4c751d] bg-[linear-gradient(112deg,#C1C79E_3.64%,rgba(91,102,27,0.80)_98.65%)]"
          >
            <div className="flex w-12 h-12 p-2 items-start gap-[10px] rounded-lg bg-[#0C353C]">
              <item.icon />
            </div>
            <div className="space-y-2">
              <h4 className="text-[#051619] text-center text-lg font-semibold leading-[150%]">
                {item.title}
              </h4>
              <p className="text-[#051619] text-center text-base font-normal leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseYourVibe;
