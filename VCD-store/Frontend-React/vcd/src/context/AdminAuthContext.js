import React, { createContext, useContext, useState, useEffect } from "react";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem("isAdminLoggedIn") === "true" || false
  );

  useEffect(() => {
    localStorage.setItem("isAdminLoggedIn", isAdminLoggedIn);
  }, [isAdminLoggedIn]);

  const loginAdmin = () => {
    setIsAdminLoggedIn(true);
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem("isAdminLoggedIn");
  };

  const clearAuth = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem("isAdminLoggedIn");
  };

  return (
    <AdminAuthContext.Provider
      value={{ isAdminLoggedIn, loginAdmin, logoutAdmin, clearAuth }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
