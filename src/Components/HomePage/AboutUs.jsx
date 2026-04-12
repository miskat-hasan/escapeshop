import React from "react";
import {
  HeartSVG,
  LeafSVG,
  TrustSVG,
  UserCheckedSVG,
} from "../Svg/SvgContainer";

const contents = [
  {
    icon: LeafSVG,
    title: "100% Natural",
    description:
      "All our products are organic, natural, and free from harmful chemicals or additives.",
  },
  {
    icon: TrustSVG,
    title: "Trusted & Legal",
    description:
      "All products are completely legal and third-party tested for quality assurance.",
  },
  {
    icon: HeartSVG,
    title: "Wellness First",
    description:
      "Carefully selected herbs to support your relaxation, focus, and overall wellbeing.",
  },
  {
    icon: UserCheckedSVG,
    title: "Age Verification",
    description:
      "You must be 21 or older to buy. Age verification is required at checkout.",
  },
];

const AboutUs = () => {
  return (
    <section className="container py-14">
      <h2 className="section_title mb-8">About Us</h2>
      <p className="section_sub_title max-w-[1008px] mx-auto">
        We started as a small group passionate about quality and transparency,
        with a mission to provide trusted, legal herbal alternatives that
        prioritize your wellbeing.
      </p>
      <div className="grid grid-cols-2 gap-8 mt-12">
        {contents?.map((item, index) => (
          <div
            key={index}
            className="flex p-8 flex-col items-center gap-4 flex-1 rounded-2xl bg-[#C1C79E33] border border-[#777a64]"
          >
            <div className="flex w-16 h-16 px-4 justify-center items-center rounded-full bg-[#0C353C33] border border-[#777a64]">
              <item.icon />
            </div>
            <div className="space-y-2 text-center">
              <h5 className="100% Natural">{item?.title}</h5>
              <p className="text-[#B4C0C3] text-center text-base font-normal leading-6">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
