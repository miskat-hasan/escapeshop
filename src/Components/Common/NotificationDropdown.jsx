"use client";
import React from "react";
import { OrderBoxSVG } from "../Svg/SvgContainer";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useGetNotifications } from "../../Hooks/api/dashboard_api";

// --- Skeleton Component ---
const NotificationSkeleton = () => (
  <div className="flex items-center py-2 px-2 gap-3 rounded-2xl border border-secondary-100 animate-pulse">
    {/* Circle Icon Skeleton */}
    <div className="shrink-0 size-10 sm:size-[50px] rounded-full bg-gray-700/50"></div>
    {/* Text Skeleton */}
    <div className="flex-1 space-y-2">
      <div className="h-3 w-1/2 bg-gray-700/50 rounded"></div>
      <div className="h-3 w-3/4 bg-gray-600/30 rounded"></div>
    </div>
  </div>
);

const NotificationDropdown = ({ openMenu, onClose }) => {
  const { data, isLoading } = useGetNotifications();

  return (
    <div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          openMenu
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        } duration-500 cursor-auto origin-top transition w-[270px] xl:w-[320px] 2xl:w-[350px] border shadow absolute top-10 -right-18 sm:right-0 p-2.5 rounded-xl border-secondary-100 bg-secondary-500 backdrop-blur-xs flex flex-col gap-4 xl:gap-6`}
      >
        <div className="flex items-center justify-between">
          <h5 className="text-white">Notification</h5>
          <IoCloseCircleOutline
            className="size-6 text-white hover:text-primary transition cursor-pointer duration-300"
            onClick={onClose}
          />
        </div>

        <div className="space-y-1 sm:space-y-2 max-h-[400px] overflow-y-auto hide-scrollbar">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <NotificationSkeleton key={i} />
            ))
          ) : data?.data?.length > 0 ? (
            data?.data?.map((item, i) => (
              <div
                key={item.id || i}
                className="flex items-center py-2 px-2 gap-3 rounded-2xl border border-secondary-100 hover:bg-white/5 transition"
              >
                <div className="flex shrink-0 size-10 sm:size-[50px] justify-center items-center rounded-full bg-primary">
                  <OrderBoxSVG className={"size-5"} />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="text-white text-xs sm:text-sm font-medium">
                    Order No: #{item?.order_number}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm line-clamp-1">
                    {item?.title}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-4 text-sm">
              No new notifications
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
