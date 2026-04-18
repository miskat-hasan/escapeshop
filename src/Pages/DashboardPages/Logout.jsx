import React from "react";

const Logout = () => {
  return (
    <div className="">
      <h2 className="text-[#F9FAFB] text-[40px] font-semibold leading-[120%] mb-4">
        Logout
      </h2>
      <p className="text-[#B4C0C3] text-lg leading-[150%]">Are you sure you want to logout</p>
      <button className="py-3 px-4.5 mt-9 cursor-pointer rounded-2xl bg-primary text-[#051619] font-medium">Yes, Logout</button>
    </div>
  );
};

export default Logout;
