import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState("Artificial Intelligence");

  return (
    <AppContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </AppContext.Provider>
  );
};
