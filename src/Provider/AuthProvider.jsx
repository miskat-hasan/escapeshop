/* eslint-disable react-refresh/only-export-components */
import { useGetUserData } from "../Hooks/api/auth_api";
import useLocalStorage from "../Hooks/useLocalStorage";
import { createContext, useEffect, useState } from "react";
export const AuthContextProvider = createContext(null);
import React from "react";

const AuthProvider = ({ children }) => {
  const [token, setToken, clearToken] = useLocalStorage("token", null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const {
    data: userData,
    isLoading: loadingUserData,
    isFetching,
  } = useGetUserData(token);

  useEffect(() => {
    if (!token) {
      setUser(null);
      localStorage.removeItem("user");
      setLoading(false);
      return;
    }

    if (loadingUserData || isFetching) {
      setLoading(true);
      return;
    }

    if (userData?.data) {
      setUser(userData.data);
      localStorage.setItem("user", JSON.stringify(userData.data));
    } else {
      setUser(null);
      clearToken();
      localStorage.removeItem("user");
    }

    setLoading(false);
  }, [token, userData, loadingUserData, isFetching]);

  // values to pass:
  const allValues = {
    loading,
    token,
    setToken,
    clearToken,
    user,
    setUser,
    setLoading,
  };
  return (
    <AuthContextProvider.Provider value={allValues}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
