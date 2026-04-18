import React from "react";
import OrderCard from "../../Components/Dashboard/OrderCard";

const OrderHistory = () => {
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#E7EBEC]">
          Purchase History
        </h3>
        <select className="text-[#E7EBEC] cursor-pointer">
          <option value="" className="text-black">Last 3 Month</option>
          <option value="" className="text-black">Last 2 Month</option>
        </select>
      </div>
      <div className="space-y-8">
        <OrderCard cardType="order-history"/>
        <OrderCard cardType="order-history"/>
      </div>
    </div>
  );
};

export default OrderHistory;
