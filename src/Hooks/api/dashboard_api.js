import { toast } from "react-toastify";
import useApi from "../useApi";
import { useQueryClient } from "@tanstack/react-query";

// All orders
export const useAllOrders = () => {
  return useApi({
    method: "get",
    key: ["all-orders"],
    endpoint: "/api/dashboard/orders-page",
    isPrivate: true,
  });
};

// Active orders
export const useActiveOrders = () => {
  return useApi({
    method: "get",
    key: ["active-order"],
    endpoint: "/api/dashboard/active-order",
    isPrivate: true,
  });
};

// All cover images
export const useAllCoverImages = () => {
  return useApi({
    method: "get",
    key: ["all-cover-images"],
    endpoint: "/api/auth/cover-image",
    isPrivate: true,
  });
};

// Update user info
export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  return useApi({
    method: "post",
    key: ["update-userinfo"],
    isPrivate: true,
    endpoint: "/api/auth/update-profile",
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
        queryClient.invalidateQueries("user");
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Uploaded design
export const useUploadedDesign = () => {
  return useApi({
    method: "get",
    key: ["uploaded-design"],
    endpoint: "/api/dashboard/order-image",
    isPrivate: true,
  });
};

// Order Ids
export const useOrderIds = () => {
  return useApi({
    method: "get",
    key: ["order-ids"],
    endpoint: "/api/support-content",
    isPrivate: true,
  });
};

// Support
export const useSupport = () => {
  return useApi({
    method: "post",
    key: ["support"],
    isPrivate: true,
    endpoint: "/api/support",
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Sticker type
export const useStickerType = () => {
  return useApi({
    method: "get",
    key: ["sticker-type"],
    endpoint: "/api/sticker/start-here",
    isPrivate: false,
  });
};

// All Review
export const useAllReview = page => {
  return useApi({
    method: "get",
    key: ["all-review", page],
    endpoint: "/api/reviews",
    params: { page },
    isPrivate: false,
  });
};

// Add Review
export const useAddReview = () => {
  const queryClient = useQueryClient();

  return useApi({
    method: "post",
    key: ["add-review"],
    isPrivate: true,
    endpoint: "/api/reviews",
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
        queryClient.invalidateQueries("all-review");
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Sticker Info
export const useStickerInfo = id => {
  return useApi({
    method: "get",
    key: ["sticker-info", id],
    endpoint: `/api/sticker/type/${id}`,
    isPrivate: false,
  });
};

// Checkout
export const useCheckout = () => {
  return useApi({
    method: "post",
    key: ["checkout"],
    isPrivate: true,
    endpoint: "/api/orders/checkout",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Add Promo code
export const usePromoCode = () => {
  return useApi({
    method: "post",
    key: ["add-promo-code"],
    isPrivate: true,
    endpoint: "/api/orders/promo-code/apply",
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Sticker Combo
export const useStickerCombo = () => {
  return useApi({
    method: "get",
    key: ["sticker-combo"],
    endpoint: `/api/order-sample`,
    isPrivate: false,
  });
};

// Shipping Price
export const useShippingPrice = () => {
  return useApi({
    method: "get",
    key: ["shipping-price"],
    endpoint: "/api/state-pricing",
    isPrivate: true,
  });
};

// Send proof req
export const useSendProofReq = id => {
  return useApi({
    method: "post",
    key: ["send-proof", id],
    isPrivate: true,
    endpoint: `/api/proof-chat/${id}/request`,
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Change Proof status
export const useChangeProofStatus = (order_id, request_id) => {
  return useApi({
    method: "post",
    key: ["change-proof-status", order_id, request_id],
    isPrivate: true,
    endpoint: `/api/proof-chat/${order_id}/${request_id}/approve-or-reject`,
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Send message
export const useSendMessage = (order_id, request_id) => {
  const queryClient = useQueryClient();

  return useApi({
    method: "post",
    key: ["send-message", order_id, request_id],
    isPrivate: true,
    endpoint: `/api/proof-chat/${order_id}/${request_id}/message`,
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
        queryClient.invalidateQueries("proof-chat");
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Proof chat
export const useProofChat = id => {
  return useApi({
    method: "get",
    key: ["proof-chat", id],
    endpoint: `/api/proof-chat/${id}`,
    isPrivate: true,
  });
};
