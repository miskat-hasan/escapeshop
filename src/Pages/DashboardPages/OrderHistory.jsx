import React, { useState } from "react";
import OrderCard from "../../Components/Dashboard/OrderCard";
import { useGetOrderHistory } from "../../Hooks/api/dashboard_api";

const FILTER_OPTIONS = [
  { label: "All Orders", value: null },
  { label: "Last 30 days", value: 1 },
  { label: "Last 60 days", value: 2 },
  { label: "Last 90 days", value: 3 },
];

const OrderHistory = () => {
  const [filter, setFilter] = useState(null);

  const { data: orderHistory, isLoading: isOrderHistoryLoading } =
    useGetOrderHistory(filter);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-semibold text-[#E7EBEC]">
          Purchase History
        </h3>
        <select
          value={filter ?? ""}
          onChange={(e) =>
            setFilter(e.target.value === "" ? null : Number(e.target.value))
          }
          className="text-[#E7EBEC] cursor-pointer bg-transparent border border-secondary-100 rounded-lg px-3 py-1.5 text-sm md:text-base outline-none"
        >
          {FILTER_OPTIONS.map((opt) => (
            <option
              key={opt.label}
              value={opt.value ?? ""}
              className="text-black"
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-6 md:space-y-8">
        {isOrderHistoryLoading ? (
          [...Array(3)].map((_, i) => (
            <div
              key={i}
              className="rounded-[30px] border border-secondary-100 bg-[#0C353C33] overflow-hidden animate-pulse"
            >
              {/* header skeleton */}
              <div className="h-[72px] sm:h-[88px] bg-[#C1C79E]/20" />
              {/* button row skeleton */}
              <div className="flex items-center justify-between px-4 md:px-6 py-4">
                <div className="h-9 w-[100px] md:w-[120px] rounded-lg bg-white/10" />
              </div>
              {/* item skeleton */}
              <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-4">
                <div className="flex max-sm:flex-col gap-4 p-4 rounded-2xl border-[0.4px] border-secondary-100">
                    <div className="w-full sm:w-[141px] h-[134px] rounded-lg bg-white/10 shrink-0" />
                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-5 bg-white/10 rounded w-3/4" />
                      <div className="h-5 bg-white/10 rounded w-1/3" />
                      <div className="h-4 bg-white/10 rounded w-1/4" />
                    </div>
                  <div className="h-9 sm:w-[130px] md:w-[150px] rounded-lg bg-white/10" />
                </div>
              </div>
            </div>
          ))
        ) : orderHistory?.data?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <p className="text-[#B4C0C3] text-base md:text-lg text-center">
              No orders found{filter ? " for this period" : ""}.
            </p>
          </div>
        ) : (
          orderHistory?.data?.map((order) => (
            <OrderCard key={order.id} cardType="order-history" order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
