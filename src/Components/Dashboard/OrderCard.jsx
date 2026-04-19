import React from "react";

const OrderCard = ({ cardType = "order" }) => {
  return (
    <div className="space-y-3 sm:space-y-6 rounded-[30px] bg-[#0C353C33] border border-secondary-100">
      {/* header */}
      <div className="flex flex-wrap p-3 sm:p-4 md:p-6 justify-between items-start gap-2 sm:gap-4 self-stretch rounded-t-2xl sm:rounded-t-[30px] bg-linear-to-r from-[#C1C79E] to-[#9EAA55]">
        <div className="space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Order ID</p>
          <p className="text-[#051619] text-base md:text-xl font-semibold">#ORD25654</p>
        </div>
        <div className="sm:border-l sm:pl-3 md:pl-4.5 border-[#101010] sm:space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Total Payment</p>
          <p className="text-[#051619] text-sm sm:text-base md:text-xl font-semibold">$311.88</p>
        </div>
        <div className="sm:border-l sm:pl-3 md:pl-4.5 border-[#101010] sm:space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Payment Method</p>
          <p className="text-[#051619] text-sm sm:text-base md:text-xl font-semibold">Card</p>
        </div>
        <div className="sm:border-l sm:pl-3 md:pl-4.5 border-[#101010] sm:space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Order date</p>
          <p className="text-[#051619] text-sm sm:text-base md:text-xl font-semibold">25 Dec 2025</p>
        </div>
        <div className="sm:border-l sm:pl-3 md:pl-4.5 border-[#101010] sm:space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Order Status</p>
          <p className="text-[#051619] text-sm sm:text-base md:text-xl font-semibold">Pending</p>
        </div>
      </div>

      {/* buttons */}
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-6">
        <button className="flex w-[100px] md:w-[120px] px-3 py-2 justify-center border border-secondary-300 items-center rounded-lg bg-[#C1C79E]/20 text-sm md:text-base text-[#E7EBEC]">
          Invoice
        </button>
        {cardType === "order" ? (
          <button className="flex w-[130px] md:w-[150px] px-3 py-2 justify-center items-center border border-secondary-100 rounded-lg bg-[#DF1C41]/10 text-[#DF1C41] text-sm md:text-base">
            Cancel Order
          </button>
        ) : (
          <button className="flex w-[130px] md:w-[150px] px-3 py-2 justify-center items-center border border-secondary-100 rounded-lg bg-[#84CC1633] text-[#E7EBEC] text-sm md:text-base">
            Send Review
          </button>
        )}
      </div>

      {/* products */}
      <div className="px-2 sm:px-4 md:px-6 pb-4 md:pb-6 space-y-4 md:space-y-6">
        {Array(2)
          .fill(null)
          ?.map((_, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row w-full p-2 sm:p-3 md:p-4 items-start sm:items-center gap-3 md:gap-4 self-stretch rounded-2xl border-[0.4px] border-secondary-100"
            >
              {/* product image */}
              <div className="w-full sm:w-[141px] h-48 sm:h-[134px] rounded-lg border border-secondary-100 overflow-hidden shrink-0">
                <img
                  src="/product-img.png"
                  alt="product"
                  className="size-full object-cover"
                />
              </div>
              {/* content */}
              <div className="space-y-1 flex-1 min-w-0">
                <p className="text-[#E7EBEC] sm:text-lg md:text-2xl font-medium leading-[150%]">
                  Cheap Indoor THCA Flower Ounce
                </p>
                <p className="text-[#E7EBEC] sm:text-lg md:text-2xl font-medium leading-[150%]">
                  Price: $160.99
                </p>
                <p className="text-[#B4C0C3] text-sm sm:text-base md:text-xl font-medium leading-[150%]">
                  Quantity: 1
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderCard;