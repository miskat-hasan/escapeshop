import React from "react";
import { useAllCoverImages } from "../../Hooks/api/dashboard_api";
import { DesignCardSkeleton } from "../Loader/Loader";

const BannerModal = ({ onClose, updateMutation }) => {
  const { data: allBanners, isLoading } = useAllCoverImages();

  return (
    <div>
      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Choose Banner Template
      </h2>

      {/* Templates Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <DesignCardSkeleton key={i} />
            ))
          : allBanners?.data?.map(banner => (
              <div
                key={banner?.id}
                onClick={() => {
                  updateMutation({ cover_image_id: banner?.id });
                  onClose();
                }}
                className="h-[90px] rounded-xl border border-white/10 cursor-pointer duration-300 hover:scale-105 transition-transform"
              >
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${banner?.image}`}
                  alt="banner"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
      </div>

      {/* Footer */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => onClose()}
          className="px-6 py-2 rounded-lg bg-white/10 cursor-pointer hover:bg-white/20 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BannerModal;
