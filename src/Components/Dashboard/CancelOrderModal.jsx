import React from "react";

const CancelModal = ({ onConfirm, onCancel, isCancelling }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={!isCancelling ? onCancel : undefined}
    />
    <div className="relative z-10 flex flex-col items-center gap-6 w-[90%] max-w-sm p-6 md:p-8 rounded-3xl border-[0.4px] border-[#C1C79E] bg-secondary-500">
      {/* Icon */}
      <div className="flex size-16 items-center justify-center rounded-full bg-[#DF1C41]/15 border border-[#DF1C41]/30">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#DF1C41"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </div>
      <div className="space-y-2 text-center">
        <h4 className="text-white text-xl font-semibold leading-[150%]">
          Cancel Order?
        </h4>
        <p className="text-[#B4C0C3] text-sm font-normal leading-[150%]">
          Are you sure you want to cancel this order? This action cannot be
          undone.
        </p>
      </div>
      <div className="flex gap-3 w-full">
        <button
          onClick={onCancel}
          disabled={isCancelling}
          className="flex-1 h-11 rounded-lg border-[0.4px] border-secondary-100 text-white text-sm font-medium leading-[150%] cursor-pointer hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Keep Order
        </button>
        <button
          onClick={onConfirm}
          disabled={isCancelling}
          className="flex-1 h-11 rounded-lg bg-[#DF1C41] text-white text-sm font-medium leading-[150%] cursor-pointer hover:bg-[#DF1C41]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isCancelling ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Cancelling...
            </span>
          ) : (
            "Yes, Cancel"
          )}
        </button>
      </div>
    </div>
  </div>
);

export default CancelModal;