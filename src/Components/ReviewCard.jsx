import React from "react";
import { CalenderSVG, StarFillSVG, StarSVG } from "./Svg/SvgContainer";

const ReviewCard = () => {
  return (
    <div className="flex min-w-[300px] mx-auto max-w-[407px] p-2 md:p-4 flex-col items-start gap-3 rounded-2xl border border-[#0C353C] bg-[#C1C79E]/20">
      {/* product image */}
      <div class="h-[200px] xl:h-[240px] w-full overflow-hidden rounded-t-2xl border border-[#0C353C]">
        <img
          src="/product-img.png"
          alt="Description of image"
          class="h-full w-full object-cover object-center"
        />
      </div>
      {/* review text */}
      <p className="text-[#E7EBEC] text-sm md:text-base font-normal xl:leading-6">
        "Absolutely love this product! The lavender is so calming and helps me
        unwind after a long day. The quality is excellent and the effects are
        exactly what I was looking for."
      </p>
      {/* starts */}
      <div className="flex gap-0.5">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              <StarFillSVG className={'max-xl:size-4'}/>
            </span>
          ))}
        <StarSVG className={'max-xl:size-4'}/>
      </div>
      {/* user */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-full overflow-hidden">
              <img
                src="/profile.png"
                alt="profile"
                className="size-full object-cover"
              />
            </div>
            <p className="text-[#F9FAFB]">Sarah M.</p>
          </div>
          <p className="text-[#84CC16] text-xs font-normal leading-[150%]">
            ✓ Verified
          </p>
        </div>
        {/* DATE */}
        <div className="flex items-center gap-1">
          <CalenderSVG />
          <p className="text-[#F9FAFB] text-xs leading-[150%]">10/02/2025</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
