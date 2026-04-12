"use client";
import { RxCross2 } from "react-icons/rx";
import React from "react";

const Modal = ({ open, onClose, children, className }) => {
  if (!open) return null;

  return (
    <div className="fixed h-screen inset-0 z-9999 flex items-center justify-center bg-black/30 backdrop-blur-xs mx-4 md:mx-0">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div
        className={`relative z-10 w-full max-w-2xl max-h-[calc(100vh-50px)] overflow-y-auto side-scrollbar p-3 md:p-5 bg-linear-to-b from-[#101324] via-[#11388B] to-[#191C25] border border-gray-700 rounded-lg shadow-lg ${className}`}
      >
        {/* Modal Content */}
        {children}

        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer grid place-items-center"
        >
          <RxCross2 className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
