import React from "react";

const TrustLegality = () => {
  return (
    <div className="container py-[110px]">
      <div className="flex p-2 md:p-6 flex-col justify-center items-start gap-3 sm:gap-6 self-stretch rounded-2xl bg-secondary-400/20 border border-secondary-100">
        <h5 className="text-[#E7EBEC] text-center font-police text-2xl leading-[150%] w-full mt-6">
          Trust & Legality
        </h5>
        <p className="text-[#8FA2A5] text-sm sm:text-base font-normal leading-[150%]">
          <span className="text-[#E7EBEC] text-base font-medium leading-6">
            100% Legal Products:
          </span>{" "}
          All products sold at EscapeShop are legal herbal smoking alternatives.
          We do not sell any controlled substances. Our products comply with all
          federal and state regulations.
        </p>
        <p className="text-[#8FA2A5] text-sm sm:text-base font-normal leading-[150%]">
          <span className="text-[#E7EBEC] text-base font-medium leading-6">
            Third-Party Testing:
          </span>{" "}
          Every product undergoes rigorous third-party laboratory testing to
          ensure purity, potency, and safety. We provide certificates of
          analysis upon request.
        </p>
        <p className="text-[#8FA2A5] text-sm sm:text-base font-normal leading-[150%]">
          <span className="text-[#E7EBEC] text-base font-medium leading-6">
            Age Verification:
          </span>{" "}
          All customers must be 21 years or older to purchase from EscapeShop.
          We verify age at checkout to ensure c ompliance with all applicable
          laws.
        </p>
        <p className="text-[#8FA2A5] text-sm sm:text-base font-normal leading-[150%]">
          <span className="text-[#E7EBEC] text-base font-medium leading-6">
            {" "}
            Ethical Sourcing:
          </span>{" "}
          We partner with certified organic farms and ethical suppliers who
          share our commitment to sustainability and quality.
        </p>
        <p className="text-[#8FA2A5] text-sm sm:text-base font-normal leading-[150%]">
          <span className="text-[#E7EBEC] text-base font-medium leading-6">
            Transparency:
          </span>{" "}
          We believe in complete transparency. All ingredients, sourcing
          information, and test results are available to our customers.
        </p>
      </div>
    </div>
  );
};

export default TrustLegality;
