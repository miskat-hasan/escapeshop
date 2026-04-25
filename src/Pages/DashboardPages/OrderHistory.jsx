import React from "react";
import OrderCard from "../../Components/Dashboard/OrderCard";
import { useGetOrderHistory } from "../../Hooks/api/dashboard_api";

const OrderHistory = () => {
  const { data: orderHistory, isLoading: isOrderHistoryLoading } =
    useGetOrderHistory();

  return (
    <div className="space-y-6 md:space-y-9">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-semibold text-[#E7EBEC]">
          Purchase History
        </h3>
        <select className="text-[#E7EBEC] cursor-pointer bg-transparent border border-secondary-100 rounded-lg px-3 py-1.5 text-sm md:text-base outline-none">
          <option value="" className="text-black">
            Last 3 Month
          </option>
          <option value="" className="text-black">
            Last 2 Month
          </option>
        </select>
      </div>
      <div className="space-y-6 md:space-y-8">
        {orderHistory?.data?.map((order) => (
          <OrderCard key={order.id} cardType="order-history" order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
