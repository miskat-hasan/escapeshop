import React from "react";
import { StarFillSVG, StarSVG } from "../Svg/SvgContainer";
import { Link } from "react-router-dom";

const CustomerReview = () => {
  return (
    <div className="container py-14">
      <h2 className="section_title sm:mb-4">What Our Customers Say</h2>
      <p className="section_sub_title">Hear from our satisfied customers</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 my-8">
        {Array(6)
          .fill(null)
          ?.map((_, index) => (
            <div
              key={index}
              className="flex p-3 sm:p-6 flex-col items-start gap-4 flex-1 rounded-[10px] bg-primary/20"
            >
              {/* starts */}
              <div className="flex gap-0.5">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>
                      <StarFillSVG className={'max-sm:size-4'}/>
                    </span>
                  ))}
                <StarSVG className={'max-sm:size-4'}/>
              </div>
              {/* review description */}
              <div className="text-[#E7EBEC] max-sm:text-sm font-normal leading-6">
                "Best chamomile I've tried. Very smooth and relaxing. Perfect
                for evening use. Will definitely purchase again!"
              </div>
              {/* customer name  */}
              <div className="flex items-center justify-between w-full">
                <h6 className="text-[#F9FAFB] text-base font-medium leading-6">
                  Sarah M.
                </h6>
                <p className="text-[#84CC16] text-xs font-normal leading-4">
                  ✓ Verified
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* button */}
      <div className="mt-8 flex justify-center">
        <Link to={"/customer-review"} className="small_btn">
          View All
        </Link>
      </div>
    </div>
  );
};

export default CustomerReview;
