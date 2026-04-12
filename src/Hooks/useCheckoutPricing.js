import { useMemo } from "react";

const PRODUCTION_OPTIONS = {
  economy: { days: [5, 7], multiplier: 0.85 },
  standard: { days: [3, 4], multiplier: 1 },
  rush: { days: [1, 2], multiplier: 1.3 },
};

const SHIPPING_OPTIONS = {
  standard: { days: [3, 5], price: 0 },
  expedited: { days: [2, 3], price: 0 },
  rush: { days: [1, 1], price: 10 },
};

export const useCheckoutPricing = ({
  subtotal = 0,
  discountAmount = 0,
  productionType = "standard",
  shippingType = "standard",
  customShippingPrice = 0,
}) => {
  return useMemo(() => {
    const production =
      PRODUCTION_OPTIONS[productionType] || PRODUCTION_OPTIONS.standard;

    const shipping =
      SHIPPING_OPTIONS[shippingType] || SHIPPING_OPTIONS.standard;

    const discountedSubtotal = Math.max(subtotal - discountAmount, 0);

    const productionAdjusted = discountedSubtotal * production.multiplier;

    const shippingCost =
      shippingType === "rush"
        ? Number(customShippingPrice || 0)
        : shipping.price;

    const total = productionAdjusted + shippingCost;

    const processingDays = production.days[1]; 
    const shippingDays = shipping.days[1]; 

    const maxDays = production.days[1] + shipping.days[1];

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + maxDays);

    return {
      discountedSubtotal,
      productionAdjusted,
      shippingCost,
      total,

      processingDays,
      shippingDays,
      deliveryDate: deliveryDate.toDateString(),

      productionLabel:
        production.multiplier === 1
          ? "Standard"
          : `${production.multiplier > 1 ? "+" : ""}${Math.round(
              (production.multiplier - 1) * 100,
            )}%`,

      shippingLabel:
        shippingType === "rush"
          ? `+$${shippingCost}`
          : shipping.price > 0
            ? `+$${shipping.price}`
            : "FREE",
    };
  }, [
    subtotal,
    discountAmount,
    productionType,
    shippingType,
    customShippingPrice,
  ]);
};
