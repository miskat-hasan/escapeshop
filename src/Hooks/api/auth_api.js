import useApi from "../useApi";
import { toast } from "react-toastify";
import useAuth from "../useAuth";
import { useLocation, useNavigate } from "react-router-dom";

// Get User Data
export const useGetUserData = token => {
  return useApi({
    method: "get",
    key: ["user", token],
    enabled: !!token,
    endpoint: "/api/users/profile",
    isPrivate: true,
    queryOptions: {
      refetchInterval: 1000 * 60 * 60, // refetch every hour
    },
  });
};

// Registration
export const useRegister = () => {
  return useApi({
    method: "post",
    key: ["register"],
    endpoint: "/api/users/register",
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Verify OTP for registration
export const useVerifyRegistrationOtp = () => {
  return useApi({
    method: "post",
    key: ["verify-registration-otp"],
    endpoint: "/api/users/otp-verify",
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Login
export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setToken } = useAuth();

  return useApi({
    method: "post",
    key: ["login"],
    endpoint: "/api/users/login",
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
        setToken(res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.email));
        navigate(location?.state ? location?.state : "/dashboard");
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Verify email
export const useVerifyEmail = () => {
  return useApi({
    method: "post",
    key: ["verify-email"],
    endpoint: "/api/users/forgot-password",
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Verify OTP
export const useVerifyOtp = () => {
  return useApi({
    method: "post",
    key: ["verify-otp"],
    endpoint: "/api/users/otp-verify",
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Resend OTP
export const useResendOtp = () => {
  return useApi({
    method: "post",
    key: ["resend-otp"],
    endpoint: "/api/users/resend-otp",
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

// Reset Password
export const useResetPassword = () => {
  return useApi({
    method: "post",
    key: ["reset-password"],
    endpoint: "/api/reset-password",
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Logout
export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser, clearToken } = useAuth();

  return useApi({
    method: "post",
    key: ["logout"],
    isPrivate: true,
    endpoint: "/api/users/logout",
    onSuccess: res => {
      if (res?.success) {
        clearToken();
        setUser(null);
        localStorage.removeItem("user");
        toast.success(res?.message);
        navigate("/auth/login");
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Change Password
export const useChangePassword = () => {
  return useApi({
    method: "post",
    key: ["change-password"],
    isPrivate: true,
    endpoint: "/api/auth/change-password",
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

// Google login
export const useSocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setToken } = useAuth();

  return useApi({
    method: "post",
    key: ["google-login"],
    endpoint: "/api/social-login",
    onSuccess: res => {
      if (res?.success) {
        toast.success(res?.message);
        setToken(res?.data?.token);
        navigate(location?.state ? location?.state : "/dashboard");
      }
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};
