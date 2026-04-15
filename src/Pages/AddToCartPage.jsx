import React from "react";
import OrderSummary from "../Components/AddToCartPage/OrderSummary";
import OrderCard from "../Components/AddToCartPage/OrderCard";

const AddToCartPage = () => {
  return (
    <div className="container pt-40 pb-32">
      <h3 className="text-[#E7EBEC] text-2xl font-semibold leading-[150%] mb-9">
        Shopping Cart (03 items)
      </h3>
      <div className="w-full flex gap-9">
        <div className="flex flex-col gap-9 flex-1">
          <div className="flex h-20 px-8 py-[37px] flex-col justify-center items-start gap-[10px] self-stretch rounded-2xl bg-gradient-to-r from-[#C1C79E] to-[#9EAA55] text-[#051619] text-2xl font-semibold leading-[130%]">
            Product Details
          </div>
          <div className="space-y-6">
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
        <OrderSummary />
      </div>
    </div>
  );
};

export default AddToCartPage;
