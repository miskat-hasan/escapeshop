import React from "react";
import { CalenderSVG, StarFillSVG, StarSVG } from "./Svg/SvgContainer";

const ReviewCard = ({ data }) => {
  return (
    <div className="flex min-w-[300px] h-full mx-auto max-w-[407px] p-2 md:p-4 flex-col items-start gap-3 rounded-2xl border border-secondary-100 bg-[#C1C79E]/20">
      {/* product image */}
      <div class="h-[200px] xl:h-[240px] w-full overflow-hidden rounded-t-2xl border border-secondary-100">
        <img
          src={
            import.meta.env.VITE_SITE_URL + "/" + data?.product?.thumbnail_image
          } // file
          alt="product image"
          class="h-full w-full object-cover object-center"
        />
      </div>
      {/* review text */}
      <p className="text-[#E7EBEC] text-sm md:text-base font-normal xl:leading-6">
        "{data?.comment}"
      </p>
      {/* starts */}
      <div className="flex gap-0.5 mt-auto">
        {Array(data?.rating)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              <StarFillSVG className={"max-xl:size-4"} />
            </span>
          ))}
        {Array(5 - data?.rating)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              <StarSVG className={"max-xl:size-4"} />
            </span>
          ))}
      </div>
      {/* user */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="size-9 flex items-center justify-center border-[0.4px] border-secondary-100 rounded-full overflow-hidden">
              {data?.user?.image ? (

                <img
                src={import.meta.env.VITE_SITE_URL + "/" + data?.user?.image}
                alt="profile"
                className="size-full object-cover"
                />
              ): <div>{data?.user?.name?.charAt(0)}</div>}
            </div>
            <p className="text-[#F9FAFB]">{data?.user?.name}</p>
          </div>
          {data?.user?.is_verified && (
            <p className="text-[#84CC16] text-xs font-normal leading-[150%]">
              ✓ Verified
            </p>
          )}
        </div>
        {/* DATE */}
        <div className="flex items-center gap-1">
          <CalenderSVG />
          <p className="text-[#F9FAFB] text-xs leading-[150%]">
            {new Date(data?.created_at).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
              timeZone: "UTC",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
