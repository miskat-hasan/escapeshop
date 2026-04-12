import React, { useContext } from "react";
import { useCheckout } from "../../Hooks/api/dashboard_api";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { CartContext } from "../../Provider/CartContext";
import { useCheckoutPricing } from "../../Hooks/useCheckoutPricing";
import { IoChevronBack } from "react-icons/io5";

const OrderPreviewModal = ({ proof, ShippingData, onProceed }) => {
  const { mutate: checkoutMutation, isPending } = useCheckout();
  const {
    cartItems,
    subtotal,
    discountAmount,
    discountedSubtotal,
    promo,
    productionType,
    shippingType,
    shippingPriceDynamic,
  } = useContext(CartContext);

  const {
    total,
    shippingCost,
    processingDays,
    shippingDays,
    deliveryDate,
    productionAdjusted,
    productionLabel,
  } = useCheckoutPricing({
    productionType,
    shippingType,
    subtotal,
    discountAmount,
    customShippingPrice: shippingPriceDynamic,
  });

  const base64ToBlob = base64 => {
    if (!base64) return null;

    const [meta, data] = base64.split(",");
    const mime = meta.match(/:(.*?);/)[1];
    const byteString = atob(data);
    const arrayBuffer = new Uint8Array(byteString.length);

    for (let i = 0; i < byteString.length; i++) {
      arrayBuffer[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mime });
  };

  const handleCheckout = () => {
    const formData = new FormData();

    formData.append("grand_total", total);
    formData.append("discount", discountAmount);
    formData.append("promo_code", promo?.data?.code || "");
    formData.append(
      "success_url",
      `${window.location.origin}/dashboard/orders`,
    );
    formData.append("cancel_url", `${window.location.origin}/cart`);
    formData.append("is_proof", proof ? 1 : 0);
    formData.append("processing_day", processingDays);
    formData.append("shipping_day", shippingDays);
    formData.append("delivery_date", deliveryDate);
    formData.append(
      "production_cost",
      (productionAdjusted - discountedSubtotal).toFixed(2),
    );
    formData.append("shipping_cost", shippingCost.toFixed(2));
    formData.append("shipping_first_name", ShippingData?.shipping_first_name);
    formData.append("shipping_last_name", ShippingData?.shipping_last_name);
    formData.append("shipping_email", ShippingData?.shipping_email);
    formData.append("shipping_phone", ShippingData?.shipping_phone);
    formData.append("shipping_address", ShippingData?.shipping_address);
    formData.append("shipping_city", ShippingData?.shipping_city);
    formData.append("shipping_state", ShippingData?.shipping_state);
    formData.append("shipping_zip", ShippingData?.shipping_zip);
    formData.append("shipping_country", ShippingData?.shipping_country);

    cartItems.forEach((item, index) => {
      formData.append(`items[${index}][type]`, item.type);
      formData.append(`items[${index}][product_id]`, item.product_id || "");
      formData.append(`items[${index}][quantity]`, item.quantity);
      formData.append(`items[${index}][total_price]`, item.total_price);
      formData.append(`items[${index}][instructions]`, item.instructions);

      if (item.type === "single") {
        formData.append(`items[${index}][shape]`, item.shape);
        formData.append(`items[${index}][material]`, item.material);
        formData.append(`items[${index}][size]`, item.size);
        formData.append(`items[${index}][white_option]`, item.white_option);

        const blob = base64ToBlob(item.artwork_image);
        if (blob) {
          formData.append(
            `items[${index}][artwork_image]`,
            blob,
            `artwork_${item.id || index}.png`,
          );
        }
      }

      if (item.type === "combo") {
        formData.append(`items[${index}][title]`, item.title || "");

        item.combo_items?.forEach((combo, i) => {
          formData.append(
            `items[${index}][combo_items][${i}][title]`,
            combo.title,
          );
          formData.append(
            `items[${index}][combo_items][${i}][description]`,
            combo.description,
          );
          formData.append(
            `items[${index}][combo_items][${i}][quantity]`,
            combo.quantity,
          );
        });
      }
    });

    checkoutMutation(formData, {
      onSuccess: res => {
        if (res?.success) {
          toast.success(res?.message);
          window.location.href = res?.data?.checkout_url;
        }
      },
    });
  };

  return (
    <div>
      <button
        onClick={() => onProceed()}
        className="flex gap-1 items-center cursor-pointer group mb-5"
      >
        <IoChevronBack className="group-hover:-translate-x-1 text-lg duration-300 transition" />
        <span>Back</span>
      </button>

      <h2 className="text-lg font-semibold mb-3">Order Preview</h2>

      {/* ITEMS */}
      <div className="space-y-3 mb-3">
        {cartItems?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border border-gray-500 rounded-lg p-3"
          >
            <div>
              <p className="font-medium text-[15px]">
                {item?.product_name || item?.title || "Product"}
              </p>
              <p className="text-sm text-gray-400">Qty: {item?.quantity}</p>
            </div>
            <p className="font-semibold text-sm">${item?.total_price}</p>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="border border-gray-500 rounded-lg p-3 space-y-2 text-sm mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-green-500">
          <span>Discount</span>
          <span>- ${discountAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>After Discount</span>
          <span>${discountedSubtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Production ({productionLabel})</span>
          <span>${(productionAdjusted - discountedSubtotal).toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            <span>
              {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
            </span>
          </span>
        </div>

        <div className="flex justify-between font-semibold border-t border-gray-400 pt-3">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* DELIVERY */}
      <div className="text-sm space-y-2 text-gray-200 mb-5">
        <p className="flex gap-3 items-center justify-between">
          <span>Processing:</span> <span>{processingDays} days</span>
        </p>
        <p className="flex gap-3 items-center justify-between">
          <span>Shipping:</span> <span>{shippingDays} days</span>
        </p>
        <p className="flex gap-3 items-center justify-between">
          <span>Delivery:</span> <span>{deliveryDate}</span>
        </p>
      </div>

      {/* ACTION */}
      <button
        disabled={isPending}
        onClick={handleCheckout}
        className="w-full bg-primary-pink py-2.5 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          <span className="flex justify-center items-center gap-2">
            <ImSpinner9 className="animate-spin" /> Processing...
          </span>
        ) : (
          "Confirm & Pay"
        )}
      </button>
    </div>
  );
};

export default OrderPreviewModal;
