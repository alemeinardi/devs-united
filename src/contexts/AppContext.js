import React, { createContext, useState } from "react";
import colors from "../data/colors.js";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [selectedColor, setSelectedColor ] = useState(colors[0]);

  return (
    <AppContext.Provider value={{ selectedColor, setSelectedColor }}>
      {props.children}
    </AppContext.Provider>
  );
};