import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CustomerInformation from "../Components/CustomerInformationPage/CustomerInformation";
import OrderSummary from "../Components/CustomerInformationPage/OrderSummary";
import { useCheckout } from "../Hooks/api/dashboard_api";

const CustomerInformationPage = () => {
  const { mutate, isPending } = useCheckout();
  const [shipping, setShipping] = useState("free");

  const { state } = useLocation();
  const buyNowItem = state?.buyNowItem ?? null;

  return (
    <div className="container pt-32 md:pt-40 pb-16 md:pb-32 px-4 md:px-6 flex flex-col lg:flex-row gap-2 2xl:gap-9">
      <CustomerInformation
        mutate={mutate}
        isPending={isPending}
        shipping={shipping}
        buyNowItem={buyNowItem}
      />
      <div className="w-full lg:w-[496px] lg:shrink-0">
        <OrderSummary
          shipping={shipping}
          setShipping={setShipping}
          isPending={isPending}
          buyNowItem={buyNowItem}
        />
      </div>
    </div>
  );
};

export default CustomerInformationPage;