import React from "react";
import PageHeader from "../Components/ProductsPage/PageHeader";
import ProductCard from "../Components/ProductsPage/ProductCard";
import {
  CheckMarkSVG,
  DownArrowSVG,
  FilterSVG,
  SearchSVG,
} from "../Components/Svg/SvgContainer";

const ProductsPage = () => {
  return (
    <div>
      <PageHeader />
      <div className="container py-20 flex gap-4 xl:gap-8 justify-between">
        {/* filters */}
        <div className="flex max-md:hidden p-2 xl:p-4 flex-col items-start rounded-lg border-[0.4px] border-[#C1C79E] h-fit">
          <div className="flex p-4 flex-col items-start gap-4 self-stretch border-b-[0.4px] border-[#C1C79E]">
            <div className="flex items-center gap-2">
              <FilterSVG />
              <p className="text-white text-[18px] font-medium leading-[150%]">
                Filters
              </p>
            </div>
            {/* category */}
            <div className="flex flex-col gap-4">
              <p className="text-white text-base font-medium leading-6">
                Category
              </p>
              <div className="flex pl-6 flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <CheckMarkSVG />
                  All
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  Calm
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  Boost
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  Happy
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  Rest
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  Creative
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-4 flex-col items-start gap-4 self-stretch">
            {/* Price Range */}
            <div className="flex flex-col gap-4">
              <p className="text-white text-base font-medium leading-6">
                Price Range
              </p>
              <div className="flex pl-6 flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <CheckMarkSVG />
                  All Price
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  <p className="text-[#B4C0C3] text-base font-normal leading-6">
                    $.1 - $20
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  <p className="text-[#B4C0C3] text-base font-normal leading-6">
                    $21 - $50
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  <p className="text-[#B4C0C3] text-base font-normal leading-6">
                    $51 - $99
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  <p className="text-[#B4C0C3] text-base font-normal leading-6">
                    $100 - $150
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  <p className="text-[#B4C0C3] text-base font-normal leading-6">
                    $151 - $250
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  <p className="text-[#B4C0C3] text-base font-normal leading-6">
                    $250 +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-1 sm:gap-8">
              <div className="relative w-full flex items-center justify-end">
                <input
                  type="search"
                  name=""
                  id=""
                  className="flex h-11 sm:h-12 pl-4 pr-14 py-2 justify-center items-center flex-1 rounded-lg border-[0.4px] border-secondary-100 text-[#B4C0C3] text-sm sm:text-base font-normal leading-6 w-full"
                  placeholder="Search"
                />
                <button className="absolute right-2 sm:right-4">
                  <SearchSVG className={"max-sm:size-5"} />
                </button>
              </div>
              <div className="flex h-11 sm:h-12 text-nowrap px-4 py-2 max-sm:text-sm justify-center items-center gap-[10px] rounded-lg border-[0.4px] border-secondary-100">
                <p>Sort by: Featured</p>
                <DownArrowSVG />
              </div>
            </div>
            <div className="flex justify-between h-11 md:hidden px-4 py-2 max-sm:text-sm items-center gap-[10px] rounded-lg border-[0.4px] border-secondary-100">
              <div className="flex items-center gap-1.5">
                <FilterSVG className={"size-4.5"} />
                <p>Filter</p>
              </div>
              <DownArrowSVG className={"size-5"} />
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-3 md:gap-3 xl:gap-6">
              {Array(9)
                .fill(null)
                ?.map((_, index) => (
                  <div key={index}>
                    <ProductCard />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
