import React from "react";

const OrderCard = ({ cardType = "order" }) => {
  return (
    <div className="space-y-6 rounded-[30px] bg-[#0C353C33] border border-secondary-100">
      {/* header */}
      <div className="flex p-6 justify-between items-center gap-[10px] self-stretch rounded-t-[30px] bg-gradient-to-r from-[#C1C79E] to-[#9EAA55]">
        <div className="border-[#101010] space-y-2">
          <p className="text-[#0B3037]">Order ID</p>
          <p className="text-[#051619] text-xl font-semibold">#ORD25654</p>
        </div>
        <div className="border-l pl-4.5 border-[#101010] space-y-2">
          <p className="text-[#0B3037]">Total Payment</p>
          <p className="text-[#051619] text-xl font-semibold">$311.88</p>
        </div>
        <div className="border-l pl-4.5 border-[#101010] space-y-2">
          <p className="text-[#0B3037]">Payment Method</p>
          <p className="text-[#051619] text-xl font-semibold">Card</p>
        </div>
        <div className="border-l pl-4.5 border-[#101010] space-y-2">
          <p className="text-[#0B3037]">Order date</p>
          <p className="text-[#051619] text-xl font-semibold">25 Dec 2025</p>
        </div>
        <div className="border-l pl-4.5 border-[#101010] space-y-2">
          <p className="text-[#0B3037]">Order Status</p>
          <p className="text-[#051619] text-xl font-semibold">Pending</p>
        </div>
      </div>
      {/* buttons */}
      <div className="flex items-center justify-between px-6">
        <button className="flex w-[120px] px-3 py-2 justify-center border border-secondary-300 items-center rounded-lg bg-[#C1C79E]/20">
          Invoice
        </button>
        {cardType === "order" ? (
          <button className="flex w-[150px] px-3 py-2 justify-center items-center border border-secondary-100 rounded-lg bg-[#DF1C41]/10 text-[#DF1C41]">
            Cancel Order
          </button>
        ) : (
          <button className="flex w-[150px] px-3 py-2 justify-center items-center border border-secondary-100 rounded-lg bg-[#84CC1633] text-[#E7EBEC]">
            Send Review
          </button>
        )}
      </div>
      {/* products */}
      <div className="px-6 pb-6 space-y-6">
        {Array(2)
          .fill(null)
          ?.map((_, index) => (
            <div
              key={index}
              className="flex w-full p-4 items-center gap-4 self-stretch rounded-2xl border-[0.4px] border-secondary-100"
            >
              {/* product image */}
              <div className="w-[141px] h-[134px] rounded-lg border border-secondary-100 overflow-hidden">
                <img
                  src="/product-img.png"
                  alt="product"
                  className="size-full object-cover"
                />
              </div>
              {/* content */}
              <div className="space-y-1 flex-1">
                <p className="text-[#E7EBEC] text-2xl font-medium leading-[150%]">
                  Cheap Indoor THCA Flower Ounce
                </p>
                <p className="text-[#E7EBEC] text-2xl font-medium leading-[150%]">
                  Price: $160.99
                </p>
                <p className="text-[#B4C0C3] text-xl font-medium leading-[150%]">
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
