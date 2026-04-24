import React from "react";
import { OrderBoxSVG } from "../Svg/SvgContainer";
import { IoCloseCircleOutline } from "react-icons/io5";

const NotificationDropdown = ({ openMenu, onClose }) => {
  return (
    <div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${openMenu ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"} duration-500 cursor-auto origin-top transition w-[270px] xl:w-[320px] 2xl:w-[350px] border shadow absolute top-10 -right-18 sm:right-0 p-2.5 rounded-xl border-secondary-100 bg-secondary-500 backdrop-blur-xs flex flex-col gap-4 xl:gap-6`}
      >
        <div className="flex items-center justify-between">
          <h5>Notification</h5>
          <IoCloseCircleOutline
            className="size-6 hover:text-primary transition cursor-pointer duration-300"
            onClick={onClose}
          />
        </div>
        <div className="space-y-1 sm:space-y-2 max-h-[400px] overflow-y-auto hide-scrollbar">
          {Array(30)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="flex items-center py-2 px-2 gap-3 rounded-2xl border border-secondary-100"
              >
                <div className="flex shrink-0 size-10 sm:size-[50px] justify-center items-center rounded-full bg-primary">
                  <OrderBoxSVG className={"size-5"} />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="text-white text-xs sm:text-sm font-medium">
                    Order No: #ORD25654
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    your order Accepted Now it’s process for delivery
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
