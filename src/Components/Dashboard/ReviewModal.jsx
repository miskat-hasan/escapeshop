import React, { useState, useRef } from "react";
import { useSendReview } from "../../Hooks/api/dashboard_api";
import { StarFillSVG, StarSVG, UploadSVG } from "../Svg/SvgContainer";
import { IoClose } from "react-icons/io5";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-toastify";

const StarIcon = ({ filled, onClick, onHover, onLeave }) => (
  <button
    type="button"
    onClick={onClick}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className="cursor-pointer transition-transform duration-150 hover:scale-110"
  >
    {filled ? <StarFillSVG /> : <StarSVG />}
  </button>
);

const ReviewModal = ({ open, onClose, item }) => {
  const { mutate: sendReview, isPending: isSendingReview } = useSendReview();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);

  if (!open) return null;

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("product_id", item?.product?.id);
    formData.append("rating", rating);
    formData.append("comment", comment);
    if (file) formData.append("file", file);

    sendReview(formData, {
      onSuccess: (data) => {
        toast.success(data?.message || "Review submitted successfully");
        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl border-[0.4px] border-[#C1C79E] bg-secondary-500 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-[#C1C79E]/20">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg border border-secondary-100 overflow-hidden shrink-0">
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
            <div>
              <h5 className="text-white text-base md:text-lg font-semibold leading-[150%] line-clamp-1">
                {item?.product?.name}
              </h5>
              <p className="text-[#B4C0C3] text-xs font-normal">
                Leave your review
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center size-8 rounded-lg border-[0.4px] border-secondary-100 text-[#B4C0C3] hover:text-white hover:border-[#C1C79E] transition-colors cursor-pointer"
          >
            <IoClose />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 p-5 md:p-6">
          {/* Description */}
          <textarea
            rows={5}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Description"
            className="w-full p-4 rounded-2xl border-[0.4px] border-[#5C787C] bg-white/5 text-[#D1D5DC] text-sm font-normal leading-[150%] outline-none focus:border-[#C1C79E] transition-colors resize-none placeholder:text-[#B4C0C3]"
          />

          {/* star + Upload + preview */}
          <div className="flex items-end gap-3 flex-wrap">
            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    filled={star <= (hoverRating || rating)}
                    onClick={() => setRating(star)}
                    onHover={() => setHoverRating(star)}
                    onLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border-[0.4px] border-[#5C787C] bg-white/5 text-[#D1D5DC] text-sm font-medium cursor-pointer hover:border-[#C1C79E] transition-colors"
              >
                <UploadSVG className={"size-4.5"} />
                Upload Photo
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {preview && (
              <div className="relative size-[78px] rounded-lg overflow-hidden border border-[#C1C79E]/40">
                <img
                  src={preview}
                  alt="preview"
                  className="size-full object-cover"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-0.5 right-0.5 flex items-center justify-center size-6 rounded-full bg-black/70 text-white cursor-pointer"
                >
                  <IoClose />
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSendingReview || !comment.trim()}
            className="flex w-full h-12 justify-center items-center rounded-lg bg-[#C1C79E] text-[#051619] text-base font-medium leading-[150%] cursor-pointer hover:bg-[#d3d8ae] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSendingReview ? (
              <span className="w-full flex gap-3 items-center justify-center">
                <ImSpinner9 className="animate-spin" />
                Processing...
              </span>
            ) : (
              "Send Review"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
