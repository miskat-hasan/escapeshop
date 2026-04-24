import React, { useState } from "react";
import { MinusSVG, PlusSVG, TrashBinSVG } from "../Svg/SvgContainer";
import { useCart } from "../../Context/CartContext";

const DeleteModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={onCancel}
    />
    {/* Modal */}
    <div className="relative z-10 flex flex-col items-center gap-6 w-[90%] max-w-sm p-6 md:p-8 rounded-3xl border-[0.4px] border-[#C1C79E] bg-secondary-500">
      {/* Icon */}
      <div className="flex size-16 items-center justify-center rounded-full bg-[#DF1C41]/15 border border-[#DF1C41]/30">
        <TrashBinSVG className="size-7 text-[#DF1C41]" />
      </div>
      <div className="space-y-2 text-center">
        <h4 className="text-white text-xl font-semibold leading-[150%]">
          Remove Item?
        </h4>
        <p className="text-[#B4C0C3] text-sm font-normal leading-[150%]">
          Are you sure you want to remove this item from your cart?
        </p>
      </div>
      <div className="flex gap-3 w-full">
        <button
          onClick={onCancel}
          className="flex-1 h-11 rounded-lg border-[0.4px] border-secondary-100 text-white text-sm font-medium leading-[150%] cursor-pointer hover:bg-white/5 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 h-11 rounded-lg bg-[#DF1C41] text-white text-sm font-medium leading-[150%] cursor-pointer hover:bg-[#DF1C41]/90 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
);

const OrderCard = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          onConfirm={() => {
            removeFromCart(item.id);
            setShowDeleteModal(false);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      <div className="flex flex-col sm:flex-row w-full p-3 md:p-4 items-start sm:items-center gap-3 md:gap-4 self-stretch rounded-2xl border-[0.4px] border-[#C1C79E]">
        {/* product image */}
        <div className="w-full sm:w-[141px] h-48 sm:h-[134px] rounded-lg border border-[#C1C79E] overflow-hidden shrink-0">
          <img
            src={import.meta.env.VITE_SITE_URL + "/" + item?.thumbnail_image}
            alt={item?.name}
            className="size-full object-cover"
          />
        </div>
        {/* content */}
        <div className="space-y-3 md:space-y-4 flex-1 w-full min-w-0">
          <p className="text-[#E7EBEC] text-lg md:text-2xl font-medium leading-[150%] truncate">
            {item?.name}
          </p>
          <p className="text-[#E7EBEC] text-lg md:text-2xl font-medium leading-[150%]">
            Price: ${Number(item?.sell_price).toFixed(2)}
          </p>
          <div className="w-full flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 md:gap-4">
              <p className="text-[#B4C0C3] text-base md:text-2xl font-medium leading-[150%]">
                Quantity: {item?.quantity}
              </p>
              <div className="flex h-10 md:h-12 px-2 py-3 justify-center items-center gap-2.5 rounded-2xl border-[0.4px] border-secondary-100">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="flex w-6 h-6 justify-center items-center gap-2.5 aspect-square rounded-lg border border-white/80 cursor-pointer"
                >
                  <MinusSVG />
                </button>
                <span className="text-white min-w-6 text-center text-[16px] md:text-[18px] font-semibold leading-[150%]">
                  {item?.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="flex w-6 h-6 justify-center items-center gap-2.5 aspect-square rounded-lg border border-white/80 cursor-pointer"
                >
                  <PlusSVG />
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="size-9 flex items-center justify-center bg-primary rounded-2.5 cursor-pointer rounded-md"
            >
              <TrashBinSVG />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;