import React from "react";
import OrderSummary from "../Components/AddToCartPage/OrderSummary";
import OrderCard from "../Components/AddToCartPage/OrderCard";

const AddToCartPage = () => {
  return (
    <div className="container pt-32 md:pt-40 pb-16 md:pb-32 px-4 md:px-6">
      <h3 className="text-[#E7EBEC] text-lg sm:text-xl md:text-2xl font-semibold leading-[150%] mb-3 sm:mb-6 md:mb-9">
        Shopping Cart (03 items)
      </h3>
      <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-9">
        <div className="flex flex-col gap-6 md:gap-9 flex-1 min-w-0">
          <div className="flex h-14 sm:h-16 md:h-20 px-6 md:px-8 py-6 md:py-[37px] flex-col justify-center items-start gap-[10px] self-stretch rounded-2xl bg-gradient-to-r from-[#C1C79E] to-[#9EAA55] text-[#051619] text-lg sm:text-xl md:text-2xl font-semibold leading-[130%]">
            Product Details
          </div>
          <div className="space-y-4 md:space-y-6">
            {Array(4)
              .fill(null)
              ?.map((_, index) => (
                <div key={index}>
                  <OrderCard />
                </div>
              ))}
          </div>
        </div>
        {/* order summary */}
        <div className="w-full lg:w-[363px] lg:flex-shrink-0">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;