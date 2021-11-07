import React, { createContext, useState } from "react";
import colors from "../data/colors.js";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [ displayName, setDisplayName ] = useState(null);
  const [ user, setUser] = useState({
    email: "",
    username: "",
    color: ""
  });
  const [selectedColor, setSelectedColor ] = useState(colors[0]);

  return (
    <AppContext.Provider value={{ selectedColor, setSelectedColor, user, setUser, displayName, setDisplayName }}>
      {props.children}
    </AppContext.Provider>
  );
};