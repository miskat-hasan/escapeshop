import React from "react";
import { UserSVG } from "../Svg/SvgContainer";

const CustomerInformation = () => {
  return (
    <form className="flex w-[760px] p-6 flex-col items-start gap-6 rounded-3xl border-[0.4px] border-[#C1C79E] bg-transparent">
      <div className="flex items-center gap-3">
        <div className="flex size-[60px] items-center justify-center rounded-full bg-primary">
          <UserSVG />
        </div>
        <div className="space-y-1.5">
          <h5 className="text-[#FFFBFB] text-2xl font-semibold leading-[150%]">
            Customer Information
          </h5>
          <p className="text-[#FFFBFB] text-base font-normal leading-[150%]">
            Please provide your contact details
          </p>
        </div>
      </div>
      {/* full name */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          Name{" "}
          <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
            *
          </span>
        </p>
        <input
          type="text"
          className="flex w-full h-[72px] p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Enter your name..."
        />
      </div>

      {/* email address */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          Email Address{" "}
          <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
            *
          </span>
        </p>
        <input
          type="email"
          className="flex w-full h-[72px] p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Enter your email..."
        />
      </div>
      {/* Phone Number */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          Phone Number{" "}
          <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
            *
          </span>
        </p>
        <input
          type="text"
          className="flex w-full h-[72px] p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Enter your number..."
        />
      </div>
      {/* Country */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          Country / Region{" "}
          <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
            *
          </span>
        </p>
        <input
          type="text"
          className="flex w-full h-[72px] p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Enter your number..."
        />
      </div>
      {/* State */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          State{" "}
          <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
            *
          </span>
        </p>
        <input
          type="text"
          className="flex w-full h-[72px] p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Enter your State..."
        />
      </div>
      {/* Town / City */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          Town / City{" "}
          <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
            *
          </span>
        </p>
        <input
          type="text"
          className="flex w-full h-[72px] p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Enter your city..."
        />
      </div>
      {/* Postcode / ZIP */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          Postcode / ZIP{" "}
          <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
            *
          </span>
        </p>
        <input
          type="text"
          className="flex w-full h-[72px] p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Enter your city..."
        />
      </div>
      {/* Street Address */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          Street Address{" "}
          <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
            *
          </span>
        </p>
        <input
          type="text"
          className="flex w-full h-[72px] p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Enter your address..."
        />
      </div>
      {/* email address */}
      <div className="space-y-3 w-full">
        <p className="text-white text-[18px] font-medium leading-[150%]">
          Order notes (optional)
        </p>
        <textarea
          rows={3}
          className="flex w-full p-6 items-center gap-[10px] self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-base font-normal leading-[150%]"
          placeholder="Notes About Your  Order, e.g. Specials Notes for Delivery"
        ></textarea>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <p className="text-[#D1D5DC] text-base font-normal leading-[150%]">
          Save this information for next time
        </p>
      </div>
    </form>
  );
};

export default CustomerInformation;
