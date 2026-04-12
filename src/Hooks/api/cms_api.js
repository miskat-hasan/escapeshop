import useApi from "../useApi";

// All Dynamic page
export const useAllDynamicPage = () => {
  return useApi({
    method: "get",
    key: ["all-dynamic-page"],
    endpoint: "/api/dynamic-page",
  });
};

// Single Dynamic page
export const useDynamicPageData = slug => {
  return useApi({
    method: "get",
    key: ["dynamic-data", slug],
    enabled: !!slug,
    endpoint: `/api/dynamic-page/${slug}`,
  });
};

// Footer Data
export const useFooterData = () => {
  return useApi({
    method: "get",
    key: ["footer-data"],
    endpoint: "/api/landing/footer",
  });
};

// About Data
export const useAboutData = () => {
  return useApi({
    method: "get",
    key: ["about-data"],
    endpoint: "/api/landing/home",
  });
};

// Brand Data
export const useBrandData = () => {
  return useApi({
    method: "get",
    key: ["brand-data"],
    endpoint: "/api/brand-images",
  });
};
