import React, { createContext, useContext } from "react";

const CryptoContext = createContext();

const Context = ({ children }) => {
  return <CryptoContext.Provider>{children}</CryptoContext.Provider>;
};

export default Context;

export const CryptoState = () => {
  return useContext(CryptoContext);
};
