import React, { createContext, useContext, useState, useEffect } from "react";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("isUserLoggedIn") === "true" || false
  );

  useEffect(() => {
    localStorage.setItem("isUserLoggedIn", isUserLoggedIn);
  }, [isUserLoggedIn]);

  const loginUser = () => {
    setIsUserLoggedIn(true);
  };

  const logoutUser = () => {
    setIsUserLoggedIn(false);
    localStorage.removeItem("isUserLoggedIn");
  };

  const clearUserAuth = () => {
    setIsUserLoggedIn(false);
    localStorage.removeItem("isUserLoggedIn");
  };

  return (
    <UserAuthContext.Provider
      value={{ isUserLoggedIn, loginUser, logoutUser, clearUserAuth }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);
