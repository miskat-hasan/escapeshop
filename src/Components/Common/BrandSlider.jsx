import React from "react";
import Marquee from "react-fast-marquee";
import { useBrandData } from "../../Hooks/api/cms_api";

const BrandSlider = () => {
  const { data: brandData, isLoading } = useBrandData();

  return (
    <>
      <h2 className="section_title mb-5 xl:mb-8">
        “Brands we <span>print</span> for.”
      </h2>

      {isLoading ? (
        <div className="flex flex-col gap-3 py-10 justify-center items-center">
          <p className="animate-spin rounded-full size-8 border-t-3 border-primary-pink border-solid" />
          Loading branding...
        </div>
      ) : (
        <Marquee autoFill={true}>
          <div className="flex gap-5 md:gap-10 pr-5 md:pr-10">
            {brandData?.data?.map(brand => (
              <img
                src={`${import.meta.env.VITE_SITE_URL}/${brand?.image}`}
                alt="brand"
                className="w-[150px] md:object-contain"
              />
            ))}
          </div>
        </Marquee>
      )}
    </>
  );
};

export default BrandSlider;
