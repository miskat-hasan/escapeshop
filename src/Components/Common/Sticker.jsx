import React from "react";
import { RightSvg } from "../../Shared/Svg/SvgContainer";
import { Link } from "react-router-dom";

const Sticker = ({ sticker, isSmall }) => {
  return (
    <Link
      to={`/sticker-type/${sticker?.id}`}
      className="flex flex-col gap-4 items-center border-t-0 border-b-0 border border-gray-500 py-4 xl:py-5.5 px-2 xl:px-3 rounded-2xl text-center group cursor-pointer group overflow-hidden"
    >
      <img
        src={`${import.meta.env.VITE_SITE_URL}/${sticker?.image}`}
        alt="sticker"
        className={`group-hover:scale-110 group-hover:rotate-6 duration-400 transition-transform ${isSmall ? "size-10" : "size-18 xl:size-[114px]"}`}
      />

      <h4
        className={`flex items-center group-hover:underline ${isSmall ? "gap-1.5 text-xs" : "gap-3 text-sm xl:text-base"}`}
      >
        <span className="line-clamp-2">{sticker?.name}</span> <RightSvg />
      </h4>
    </Link>
  );
};

export default Sticker;
