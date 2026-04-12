import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import { axiosPublic } from "./useAxiosPublic";

export default function useApi({
  endpoint,
  method = "get",
  isPrivate = false,
  key,
  params,
  headers,
  axiosOptions,
  enabled = true,
  queryOptions,
  mutationOptions,
  onSuccess,
  onError,
}) {
  const axiosInstance = isPrivate ? axiosSecure : axiosPublic;

  const query = useQuery({
    queryKey: key,
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint, {
        params,
        headers,
        ...axiosOptions,
      });
      return res.data;
    },
    retry: false,
    enabled: method === "get" && enabled,
    onSuccess,
    onError,
    ...queryOptions,
  });

  const mutation = useMutation({
    mutationKey: key,
    mutationFn: async (variables = {}) => {
      const dynamicEndpoint = variables.endpoint || endpoint;
      const payload = variables.data || variables;

      // Support:
      // - mutate({ data })
      // - mutate({ endpoint: "/api/other" })
      // - mutate({ endpoint: "/api/other", data })

      if (method === "delete") {
        const res = await axiosInstance.delete(dynamicEndpoint, {
          data: payload,
          headers,
          ...axiosOptions,
        });
        return res.data;
      } else {
        const res = await axiosInstance[method](dynamicEndpoint, payload, {
          headers,
          ...axiosOptions,
        });
        return res.data;
      }
    },
    onSuccess,
    onError,
    ...mutationOptions,
  });

  return method === "get" ? query : mutation;
}
