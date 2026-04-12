import React from "react";
import { useForm } from "react-hook-form";
import { useSendProofReq } from "../../Hooks/api/dashboard_api";
import { ImSpinner9 } from "react-icons/im";

const SendProofReqModal = ({ orderId, currentOrderStatus, onClose }) => {
  const { mutateAsync: sendProofMutation, isPending } =
    useSendProofReq(orderId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async data => {
    sendProofMutation(data, {
      onSuccess: res => {
        if (res?.success) {
          onClose();
        }
      },
    });
  };

  return (
    <div className="">
      <h2 className="text-lg md:text-xl font-semibold mb-4">Send Proof Request</h2>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        {/* Step */}
        <div>
          <label className="block text-sm lg:text-base font-medium mb-1">
            Current status
          </label>
          <input
            type="text"
            value={currentOrderStatus}
            readOnly
            {...register("step")}
            className="w-full capitalize border border-gray-500 px-3 py-2 rounded-lg outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm lg:text-base font-medium mb-1">
            Message
          </label>
          <textarea
            placeholder="Enter message"
            rows={5}
            {...register("message", {
              required: "Message is required",
            })}
            className="w-full border border-gray-500 px-3 py-2 rounded-lg outline-none"
          ></textarea>

          {errors.message && (
            <p className="text-red-500 text-sm mt-0.5">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-md cursor-pointer border-gray-500"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-primary-pink cursor-pointer rounded-md disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? (
              <span className="w-full flex gap-3 items-center justify-center">
                <ImSpinner9 className="animate-spin" />
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendProofReqModal;
