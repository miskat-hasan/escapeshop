import React from "react";
import { LocationSVG, MailSVG, PhoneSVG } from "../Svg/SvgContainer";

const ContactInformation = () => {
  return (
    <div className="py-14 mt-14 mb-28 relative overflow-hidden">
      <div className="max-w-[1044px] mx-auto flex max-md:flex-col gap-4 justify-center md:justify-between px-2">
        {/* left side */}
        <div className="space-y-10">
          <h3 className="text-white max-sm:text-left max-md:text-center text-[32px] font-police tracking-wide leading-[120%]">
            Contact Information
          </h3>
          <div className="space-y-8">
            {/* email */}
            <div className="flex items-center max-sm:justify-start max-md:justify-center gap-4">
              <div className="w-10 h-10 aspect-square rounded bg-transparent border border-primary/20 flex items-center justify-center">
                <MailSVG />
              </div>
              <div className="space-y-1">
                <h5 className="text-white text-2xl font-normal leading-[150%]">
                  Email
                </h5>
                <a href="mailto:hello@escapeshop.com" className="text-white text-base font-normal leading-6 hover:text-primary transition duration-300">
                  hello@escapeshop.com
                </a>
              </div>
            </div>
            {/* phone */}
            {/* <div className="flex items-center gap-4">
              <div className="w-10 h-10 aspect-square rounded bg-transparent border border-primary/20 flex items-center justify-center">
                <PhoneSVG />
              </div>
              <div className="space-y-1">
                <h5 className="text-white text-2xl font-normal leading-[150%]">
                  Phone
                </h5>
                <p className="text-white text-base font-normal leading-6">
                  +1 (555) 123-4567
                </p>
              </div>
            </div> */}

            {/* address */}
            {/* <div className="flex items-center gap-4">
              <div className="w-10 h-10 aspect-square rounded bg-transparent border border-primary/20 flex items-center justify-center">
                <LocationSVG />
              </div>
              <div className="space-y-1">
                <h5 className="text-white text-2xl font-normal leading-[150%]">
                  Office
                </h5>
                <p className="text-white text-base font-normal leading-6">
                  123 Community Drive, Food City, FC 12345
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* right side -- form */}
        <form className="flex sm:max-w-[536px] mx-auto w-full p-3 sm:p-6 flex-col items-start gap-4 rounded-2xl bg-white/10 border border-[#3a5237]">
          <div className="flex max-sm:flex-col sm:items-center gap-4 justify-between w-full">
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-white text-base font-normal leading-6">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="flex w-full h-10 px-2 py-[10px] items-center gap-[10px] rounded-lg border-[0.4px] border-[#5C787C] bg-[#F6F6F633] text-white text-sm font-normal leading-[150%]"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-white text-base font-normal leading-6">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your@gmail.com"
                className="flex w-full h-10 px-2 py-[10px] items-center gap-[10px] rounded-lg border-[0.4px] border-[#5C787C] bg-[#F6F6F633] text-white text-sm font-normal leading-[150%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-white text-base font-normal leading-6">
              Email Address
            </label>
            <textarea
              rows={6}
              className="flex h-[108px] px-2 py-[10px] items-start gap-[335px] self-stretch rounded-lg border-[0.4px] border-[#5C787C] bg-[#F6F6F633] text-white text-sm font-normal leading-[150%]"
              placeholder="Tell us how can we help you...."
            ></textarea>
          </div>
          <button className="flex h-10 p-[10px] justify-center items-center gap-[10px] self-stretch rounded-lg border border-[#5C787C] bg-primary hover:bg-[#a9b469] transition duration-300 text-black cursor-pointer max-sm:text-sm font-medium leading-6">
            Send message
          </button>
        </form>
      </div>
      {/* gradient circles */}
      <div className="w-[328px] h-[328px] rounded-full bg-[#C1C79E80] blur-[150px] absolute left-1/2 -translate-x-1/2 -bottom-44 -z-10"></div>
    </div>
  );
};

export default ContactInformation;
