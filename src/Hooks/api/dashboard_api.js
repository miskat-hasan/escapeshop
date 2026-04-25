import { toast } from "react-toastify";
import useApi from "../useApi";
import { useQueryClient } from "@tanstack/react-query";

// Update user info == done
export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  return useApi({
    method: "post",
    key: ["update-userinfo"],
    isPrivate: true,
    endpoint: "/api/users/update",
    onSuccess: (res) => {
      if (res?.success) {
        toast.success(res?.message);
        queryClient.invalidateQueries("user");
      }
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Support == done
export const useContactUs = () => {
  return useApi({
    method: "post",
    key: ["contact"],
    endpoint: "/api/contact-us",
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// All reviews == done
export const useGetAllReviews = (page) => {
  return useApi({
    method: "get",
    key: ["all-reviews", page],
    endpoint: `/api/reviews/customer`,
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
    onSuccess: (res) => {
      if (res?.success) {
        toast.success(res?.message);
        queryClient.invalidateQueries("all-review");
      }
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// categories == done
export const useGetAllCategories = () => {
  return useApi({
    method: "get",
    key: ["categories"],
    endpoint: `/api/categories`,
    isPrivate: false,
  });
};

// get all products == done
export const useAllProducts = (
  page,
  category_id,
  min_price,
  max_price,
  search,
  sort,
) => {
  return useApi({
    method: "get",
    key: [
      "all-products",
      page,
      category_id,
      min_price,
      max_price,
      search,
      sort,
    ],
    endpoint: `/api/products/filter`,
    isPrivate: false,
    params: {
      page,
      category_id: category_id ?? undefined,
      min_price: min_price ?? undefined,
      max_price: max_price ?? undefined,
      search: search || undefined,
      sort: sort !== "featured" ? sort : undefined,
    },
  });
};

// Featured products == done
export const useFeaturedProducts = () => {
  return useApi({
    method: "get",
    key: ["featured-products"],
    endpoint: `/api/products/featured`,
    isPrivate: false,
  });
};

// Green Aura products == done
export const useGreenAuraProducts = () => {
  return useApi({
    method: "get",
    key: ["green-aura-products"],
    endpoint: `/api/products/home-third`,
    isPrivate: false,
  });
};

// Top Shelf Reserve products == done
export const useTopShelfProducts = () => {
  return useApi({
    method: "get",
    key: ["top-shelf-products"],
    endpoint: `/api/products/home-second`,
    isPrivate: false,
  });
};

// Budget Friendly products == done
export const useBudgetFriendlyProducts = () => {
  return useApi({
    method: "get",
    key: ["budget-friendly-products"],
    endpoint: `/api/products/home-first`,
    isPrivate: false,
  });
};

// product details == done
export const useProductDetails = (id) => {
  return useApi({
    method: "get",
    enabled: !!id,
    key: ["product-details", id],
    endpoint: `/api/products/${id}`,
    isPrivate: false,
  });
};

// Checkout == done
export const useCheckout = () => {
  return useApi({
    method: "post",
    key: ["checkout"],
    isPrivate: true,
    endpoint: "/api/make-order",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// About us section content == done
export const useAboutUsSectionContent = () => {
  return useApi({
    method: "get",
    key: ["about-us-section-content"],
    endpoint: `/api/about-page`,
    isPrivate: false,
  });
};

// About us page content == done
export const useAboutContent = () => {
  return useApi({
    method: "get",
    key: ["about-us-content"],
    endpoint: `/api/about-content`,
    isPrivate: false,
  });
};

// Social media links == done
export const useSocialMediaLinks = () => {
  return useApi({
    method: "get",
    key: ["social-media-links"],
    endpoint: `/api/social-media`,
    isPrivate: false,
  });
};

// Get my orders == done
export const useGetMyOrders = () => {
  return useApi({
    method: "get",
    key: ["my-orders"],
    endpoint: `/api/my-orders`,
    isPrivate: true,
  });
};

// Get order history == done
export const useGetOrderHistory = () => {
  return useApi({
    method: "get",
    key: ["order-history"],
    endpoint: `/api/order-history`,
    isPrivate: true,
  });
};

// download invoice 
export const useDownloadInvoice = (order_id) => {
  return useApi({
    method: "post",
    key: ["download-invoice", order_id],
    isPrivate: true,
    enabled: !!order_id,
    endpoint: `/api/order-invoice?order_id=${order_id}`,
    axiosOptions: {
      responseType: "blob", 
    },
    onError: (err) => {
      toast.error("Failed to download invoice");
      console.error(err);
    },
  });
};
// Get notifications == done
export const useGetNotifications = () => {
  return useApi({
    method: "get",
    key: ["notifications"],
    endpoint: `/api/notifications`,
    isPrivate: true,
  });
};

// Get footer contents == done
export const useGetFooterContents = () => {
  return useApi({
    method: "get",
    key: ["footer-contents"],
    endpoint: `/api/settings`,
    isPrivate: false,
  });
};

// send review == done
export const useSendReview = () => {
  return useApi({
    method: "post",
    key: ["send-review"],
    isPrivate: true,
    endpoint: "/api/reviews/store",
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
