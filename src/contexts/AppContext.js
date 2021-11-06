import React, { createContext, useState } from "react";
import colors from "../data/colors.js";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [selectedColor, setSelectedColor ] = useState(colors[0]);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <AppContext.Provider value={{ selectedColor, setSelectedColor, isRegistered, setIsRegistered }}>
      {props.children}
    </AppContext.Provider>
  );
};