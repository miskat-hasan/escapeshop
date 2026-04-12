import React from "react";

export const OrderCardSkeleton = () => {
  return (
    <div className="bg-[#FFFFFF33] border border-gray-600 rounded-2xl px-5 py-5 text-center animate-pulse">
      <div className="h-10 w-16 mx-auto bg-gray-500/40 rounded-md mb-3"></div>
      <div className="h-4 w-24 mx-auto bg-gray-500/30 rounded-md"></div>
    </div>
  );
};

export const OrderRowSkeleton = () => {
  return (
    <tr className="animate-pulse">
      <td className="p-3">
        <div className="h-4 w-20 bg-gray-500/30 rounded" />
      </td>
      <td className="p-3">
        <div className="h-4 w-16 bg-gray-500/30 rounded" />
      </td>
      <td className="p-3">
        <div className="h-4 w-24 bg-gray-500/30 rounded" />
      </td>
      <td className="p-3">
        <div className="h-4 w-12 bg-gray-500/30 rounded" />
      </td>
      <td className="p-3">
        <div className="h-6 w-20 bg-gray-500/40 rounded-full" />
      </td>
      <td className="p-3">
        <div className="h-5 w-4 bg-gray-500/40 rounded" />
      </td>
    </tr>
  );
};

export const ActiveOrderSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-[#141414] py-8 md:py-12 rounded-2xl">
        <div className="size-24 md:size-32 mx-auto rounded-full bg-gray-500/40" />
        <div className="h-5 mx-auto w-56 bg-gray-500/30 rounded mt-5" />
      </div>
    </div>
  );
};

export const StickerCardSkeleton = ({ isSmall }) => {
  return (
    <div className="flex flex-col gap-4 items-center border-t-0 border-b-0 border border-gray-500 py-5.5 px-3 rounded-2xl text-center animate-pulse">
      {/* Image */}
      <div
        className={`bg-gray-500/40 rounded ${
          isSmall ? "size-10" : "size-[114px]"
        }`}
      ></div>

      {/* Title */}
      <div className={`flex items-center ${isSmall ? "gap-1.5" : "gap-3"}`}>
        <div className="h-4 w-20 bg-gray-500/30 rounded"></div>
        <div className="h-4 w-4 bg-gray-500/30 rounded"></div>
      </div>
    </div>
  );
};

export const DesignCardSkeleton = () => {
  return (
    <div className="h-[90px] w-full rounded-xl border border-white/10 overflow-hidden relative bg-gray-800/40">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};

export const ReviewCardSkeleton = () => {
  return (
    <div className="flex justify-between gap-5 animate-pulse">
      <div className="max-w-[80%] w-full">
        <div className="flex items-start gap-3 mt-4">
          <div className="rounded-full size-12 bg-gray-500 shrink-0" />

          <div className="w-full">
            <div className="h-4 w-32 bg-gray-500 rounded mb-2" />
            <div className="h-3 w-24 bg-gray-500 rounded mb-3" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-500 rounded" />
              <div className="h-3 w-4/6 bg-gray-500 rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-500 rounded"></div>
        ))}
      </div>
    </div>
  );
};
