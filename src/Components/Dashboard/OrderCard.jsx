import React, { useState } from "react";
import {
  useCancelOrder,
  useDownloadInvoice,
} from "../../Hooks/api/dashboard_api";
import ReviewModal from "./ReviewModal";
import CancelModal from "./CancelOrderModal";
import { toast } from "react-toastify";

const OrderCard = ({ cardType = "order", order }) => {
  const { mutate: downloadInvoice, isPending: isDownloadingInvoice } =
    useDownloadInvoice(order?.id);
  const { mutate: cancelOrderMutation, isPending: isCancellingOrder } =
    useCancelOrder();

  const [reviewItem, setReviewItem] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const downloadInvoiceHandler = (orderId) => {
    downloadInvoice(orderId, {
      onSuccess: (data) => {
        const blob = new Blob([data], { type: "application/pdf" });
        if (blob.size === 0) {
          console.error("The PDF blob is empty.");
          return;
        }
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `invoice-${orderId}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
    });
  };

  const handleCancelOrder = () => {
    cancelOrderMutation(
      { order_id: order?.id },
      {
        onSuccess: (data) => {
          setShowCancelModal(false);
          toast.success(data?.message || "Order cancelled successfully");
        },
      },
    );
  };

  return (
    <div className="space-y-3 sm:space-y-6 rounded-[30px] bg-[#0C353C33] border border-secondary-100">
      {/* header */}
      <div className="flex flex-wrap p-3 sm:p-4 md:p-6 justify-between items-start gap-2 sm:gap-4 self-stretch rounded-t-2xl sm:rounded-t-[30px] bg-linear-to-r from-[#C1C79E] to-[#9EAA55]">
        <div className="space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Order ID</p>
          <p className="text-[#051619] text-base md:text-xl font-semibold">
            #{order?.order_number}
          </p>
        </div>
        <div className="sm:border-l sm:pl-3 md:pl-4.5 border-[#101010] sm:space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Total Payment</p>
          <p className="text-[#051619] text-sm sm:text-base md:text-xl font-semibold">
            ${order?.total_amount}
          </p>
        </div>
        <div className="sm:border-l sm:pl-3 md:pl-4.5 border-[#101010] sm:space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Payment Method</p>
          <p className="text-[#051619] text-sm sm:text-base md:text-xl font-semibold">
            {order?.payments?.payment_gateway}
          </p>
        </div>
        <div className="sm:border-l sm:pl-3 md:pl-4.5 border-[#101010] sm:space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Order date</p>
          <p className="text-[#051619] text-sm sm:text-base md:text-xl font-semibold">
            {new Date(order?.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="sm:border-l sm:pl-3 md:pl-4.5 border-[#101010] sm:space-y-1 md:space-y-2 min-w-[80px]">
          <p className="text-[#0B3037] text-xs md:text-sm">Order Status</p>
          <p className="text-[#051619] text-sm sm:text-base md:text-xl font-semibold">
            {order?.order_status}
          </p>
        </div>
      </div>

      {/* buttons */}
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-6">
        <button
          onClick={() => downloadInvoiceHandler(order?.id)}
          disabled={isDownloadingInvoice}
          className="flex w-[100px] md:w-[120px] px-3 py-2 justify-center border border-secondary-300 items-center rounded-lg bg-[#C1C79E]/20 text-sm md:text-base text-[#E7EBEC] cursor-pointer hover:bg-[#C1C79E]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloadingInvoice ? (
            <span className="flex items-center gap-1.5">
              <svg
                className="animate-spin size-3.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Loading
            </span>
          ) : (
            "Invoice"
          )}
        </button>
        {cardType === "order" && (
          <button
            onClick={() => setShowCancelModal(true)}
            disabled={isCancellingOrder}
            className="flex w-[130px] md:w-[150px] px-3 py-2 justify-center items-center border border-secondary-100 rounded-lg bg-[#DF1C41]/10 text-[#DF1C41] text-sm md:text-base cursor-pointer hover:bg-[#DF1C41]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel Order
          </button>
        )}
      </div>

      {/* products */}
      <div className="px-2 sm:px-4 md:px-6 pb-4 md:pb-6 space-y-4 md:space-y-6">
        {order?.items?.map((item, index) => (
          <div
            key={item?.id || index}
            className="flex flex-col sm:flex-row w-full p-2 sm:p-3 md:p-4 items-start gap-3 md:gap-4 self-stretch rounded-2xl border-[0.4px] border-secondary-100"
          >
            <div className="w-full sm:w-[141px] h-48 sm:h-[134px] rounded-lg border border-secondary-100 overflow-hidden shrink-0">
              <img
                src={
                  import.meta.env.VITE_SITE_URL +
                  "/" +
                  item?.product?.thumbnail_image
                }
                alt={item?.product?.name}
                className="size-full object-cover"
              />
            </div>
            <div className="space-y-1 flex-1 min-w-0">
              <p className="text-[#E7EBEC] sm:text-lg md:text-2xl font-medium leading-[150%]">
                {item?.product?.name}
              </p>
              <p className="text-[#E7EBEC] sm:text-lg md:text-2xl font-medium leading-[150%]">
                Price: ${item?.price}
              </p>
              <p className="text-[#B4C0C3] text-sm sm:text-base md:text-xl font-medium leading-[150%]">
                Quantity: {item?.quantity}
              </p>
            </div>
            {cardType !== "order" && (
              <button
                onClick={() => setReviewItem(item)}
                className="flex w-full sm:w-[130px] md:w-[150px] px-3 py-2 justify-center items-center border border-secondary-100 rounded-lg bg-[#84CC1633] text-[#E7EBEC] text-sm md:text-base cursor-pointer hover:bg-[#84CC1650] transition-colors"
              >
                Send Review
              </button>
            )}
          </div>
        ))}
      </div>

      {showCancelModal && (
        <CancelModal
          onConfirm={handleCancelOrder}
          onCancel={() => setShowCancelModal(false)}
          isCancelling={isCancellingOrder}
        />
      )}

      {reviewItem && (
        <ReviewModal
          open={!!reviewItem}
          onClose={() => setReviewItem(null)}
          item={reviewItem}
        />
      )}
    </div>
  );
};

export default OrderCard;
