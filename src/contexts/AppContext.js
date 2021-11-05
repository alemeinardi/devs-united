import React, { createContext, useState } from "react";
import colors from "../data/colors.js";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [selectedColor, setSelectedColor ] = useState(colors[0]);
  const [isRegistered, setIsRegistered] = useState(false);

  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    tweet: "",
    date: null,
    user: "",
    id: null,
    likes: 0
  })

  return (
    <AppContext.Provider value={{ selectedColor, setSelectedColor, isRegistered, setIsRegistered, tweet, setTweet }}>
      {props.children}
    </AppContext.Provider>
  );
};