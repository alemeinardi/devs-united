import React, { createContext, useState } from "react";
import colors from "../data/colors.js";

export const AppContext = createContext();

export const AppProvider = (props) => {

  const [ user, setUser] = useState({
    userId: null,
    email: "",
    photoURL: "",
    username: "",
    color: colors[0].hex,
    isRegistered: false,
    displayName: ""
  });

  const [ selectedColor, setSelectedColor ] = useState(colors[0]);
  const [ isProfile, setIsProfile] = useState(false);
  const [ filter, setFilter ] = useState("all");
  const [ isLoading, setIsLoading ] = useState(true);

  return (
    <AppContext.Provider value={{ 
      selectedColor, 
      setSelectedColor, 
      user, 
      setUser,
      isProfile,
      setIsProfile,
      filter,
      setFilter,
      isLoading,
      setIsLoading }}>
      {props.children}
    </AppContext.Provider>
  );
};