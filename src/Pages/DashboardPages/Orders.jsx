import React from "react";
import OrderCard from "../../Components/Dashboard/OrderCard";
import { useGetMyOrders } from "../../Hooks/api/dashboard_api";

const OrderSkeleton = () => (
  <div className="rounded-[30px] border border-secondary-100 bg-[#0C353C33] overflow-hidden animate-pulse">
    {/* header strip */}
    <div className="h-[72px] sm:h-[88px] bg-[#C1C79E]/20" />
    {/* button row */}
    <div className="flex items-center justify-between px-4 md:px-6 py-4">
      <div className="h-9 w-[100px] md:w-[120px] rounded-lg bg-white/10" />
      <div className="h-9 w-[130px] md:w-[150px] rounded-lg bg-white/10" />
    </div>
    {/* item */}
    <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-4">
      <div className="flex gap-4 p-4 rounded-2xl border-[0.4px] border-secondary-100">
        <div className="w-[141px] h-[134px] rounded-lg bg-white/10 shrink-0" />
        <div className="flex-1 space-y-3 py-1">
          <div className="h-5 bg-white/10 rounded w-3/4" />
          <div className="h-5 bg-white/10 rounded w-1/3" />
          <div className="h-4 bg-white/10 rounded w-1/4" />
        </div>
      </div>
    </div>
  </div>
);

const Orders = () => {
  const { data: ordersData, isLoading: isOrdersLoading } = useGetMyOrders();

  return (
    <div className="space-y-6 md:space-y-9">
      <h3 className="text-xl md:text-2xl font-semibold text-[#E7EBEC]">
        Orders({isOrdersLoading ? "..." : ordersData?.data?.length || 0})
      </h3>
      <div className="space-y-6 md:space-y-8">
        {isOrdersLoading ? (
          [...Array(3)].map((_, i) => <OrderSkeleton key={i} />)
        ) : ordersData?.data?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-[#B4C0C3] text-base md:text-lg text-center">
              You have no orders yet.
            </p>
          </div>
        ) : (
          ordersData?.data?.map((item, index) => (
            <OrderCard key={index} order={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;