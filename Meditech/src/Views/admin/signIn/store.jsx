import React, { createContext, useContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <StoreContext.Provider value={{ userName, setUserName }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
