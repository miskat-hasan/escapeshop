import React from "react";
import { StarFillSVG, StarSVG } from "../Svg/SvgContainer";
import { Link } from "react-router-dom";

const CustomerReview = () => {
  return (
    <div className="container py-14">
      <h2 className="section_title mb-4">What Our Customers Say</h2>
      <p className="section_sub_title">Hear from our satisfied customers</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {Array(6)
          .fill(null)
          ?.map((_, index) => (
            <div
              key={index}
              className="flex h-[196px] p-6 flex-col items-start gap-4 flex-1 rounded-[10px] bg-primary/20"
            >
              {/* starts */}
              <div className="flex gap-0.5">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>
                      <StarFillSVG />
                    </span>
                  ))}
                <StarSVG />
              </div>
              {/* review description */}
              <div className="text-[#E7EBEC] text-base font-normal leading-6">
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
        <Link to={""} className="small_btn">
          View All
        </Link>
      </div>
    </div>
  );
};

export default CustomerReview;
