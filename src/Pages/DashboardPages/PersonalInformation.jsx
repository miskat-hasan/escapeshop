import React from "react";
import { PenSVG } from "../../Components/Svg/SvgContainer";

const PersonalInformation = () => {
  return (
    <div className="flex w-[989px] p-6 flex-col items-start gap-9 rounded-2xl bg-[#0C353C]/20 border border-secondary-100">
      <div className="size-[93px] rounded-full relative">
        <img
          src="/profile.png"
          alt=""
          className="size-full object-cover rounded-full"
        />
        <div className="absolute size-9 flex items-center justify-center rounded-[20px] border-[0.4px] border-primary bg-secondary-500 bottom-0 right-0">
          <PenSVG />
        </div>
      </div>
      {/* form */}
      <form className="space-y-[23px] w-full ">
        <div className="flex items-center gap-9">
          {/* Full name */}
          <div className="space-y-4 w-full">
            <p className="text-white text-[18px] font-medium leading-[150%]">
              Full Name{" "}
              <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
                *
              </span>
            </p>
            <input
              type="text"
              className="flex w-full p-3 items-end gap-[10px] self-stretch rounded-lg border-[0.4px] border-[#5C787C] bg-[#F6F6F6]/10 text-[#E7EBEC] text-base leading-[150%]"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="flex items-center gap-9">
          {/* email */}
          <div className="space-y-4 w-full">
            <p className="text-white text-[18px] font-medium leading-[150%]">
              Email Address{" "}
              <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
                *
              </span>
            </p>
            <input
              type="email"
              className="flex w-full p-3 items-end gap-[10px] self-stretch rounded-lg border-[0.4px] border-[#5C787C] bg-[#F6F6F6]/10 text-[#E7EBEC] text-base leading-[150%]"
              placeholder="johndoe@gmail.com"
            />
          </div>
          {/* number */}
          <div className="space-y-4 w-full">
            <p className="text-white text-[18px] font-medium leading-[150%]">
              Phone Number{" "}
              <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
                *
              </span>
            </p>
            <input
              type="text"
              className="flex w-full p-3 items-end gap-[10px] self-stretch rounded-lg border-[0.4px] border-[#5C787C] bg-[#F6F6F6]/10 text-[#E7EBEC] text-base leading-[150%]"
              placeholder="+0 1234567890"
            />
          </div>
        </div>
        <div className="flex items-center gap-9">
          {/* email */}
          <div className="space-y-4 w-full">
            <p className="text-white text-[18px] font-medium leading-[150%]">
              Gender{" "}
              <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
                *
              </span>
            </p>
            <select className="flex w-full p-3 items-end gap-[10px] self-stretch rounded-lg border-[0.4px] border-[#5C787C] bg-[#F6F6F6]/10 text-[#E7EBEC] text-base leading-[150%] cursor-pointer">
            <option value="male" className="text-black ">Male</option>
            <option value="female" className="text-black">Female</option>
            </select>
          </div>
        </div>
        <button className="flex w-[165px] p-3 flex-col justify-center items-center gap-2.5 rounded-[10px] bg-primary text-[#051619] text-center leading-[150%] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">Save Change</button>
      </form>
    </div>
  );
};

export default PersonalInformation;
