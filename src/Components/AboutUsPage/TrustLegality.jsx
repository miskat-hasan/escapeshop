import React from "react";

const TrustLegality = ({ data }) => {
  return (
    <div className="container py-[110px]">
      <div className="flex p-2 md:p-6 flex-col justify-center items-start gap-3 sm:gap-6 self-stretch rounded-2xl bg-secondary-400/20 border border-secondary-100">
        <h5 className="text-[#E7EBEC] text-center font-police text-2xl leading-[150%] w-full mt-6">
          Trust & Legality
        </h5>
        {data?.map((item, index) => (
          <p
            key={index}
            className="text-[#8FA2A5] text-sm sm:text-base font-normal leading-[150%]"
          >
            <span className="text-[#E7EBEC] text-base font-medium leading-6">
              {item?.title}
            </span>{" "}
            {item?.desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TrustLegality;
