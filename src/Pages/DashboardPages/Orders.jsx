import React from "react";
import OrderCard from "../../Components/Dashboard/OrderCard";
import { useGetMyOrders } from "../../Hooks/api/dashboard_api";

const Orders = () => {
  const { data: ordersData, isLoading: isOrdersLoading } = useGetMyOrders();
  return (
    <div className="space-y-6 md:space-y-9">
      <h3 className="text-xl md:text-2xl font-semibold text-[#E7EBEC]">
        Orders({ordersData?.data?.length || 0})
      </h3>
      <div className="space-y-6 md:space-y-8">
        {ordersData?.data?.map((item, index) => (
          <OrderCard key={index} order={item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
