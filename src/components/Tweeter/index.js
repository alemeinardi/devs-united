import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import { AppContext } from "../../contexts/AppContext.js";
import { myfirestore } from "../../firebase/firebase.js"

const Tweeter = () => {
  const [longTweet, setLongTweet] = useState(0);
  const { tweet, setTweet } = useContext(AppContext);

  const handleChange = (e) => {
    let newTweet = {...tweet,
    [e.target.name]: e.target.value}
    newTweet.date = new Date(Date.now())
    e.target.name === "tweet" && setLongTweet(e.target.value.length)
    setTweet(newTweet)
  }

  const sendTweet = () => {
    myfirestore.collection("tweets").add(tweet)
  }

  return (
  <div className={styles.tweeter}>
    <textarea name="tweet" placeholder="What’s happening?" cols="60" rows="6" onChange={handleChange}>
    </textarea>
    <div className={styles.letters}>
      <span className={styles.letter_counter}>{longTweet}</span>
      <span className={styles.letter_max}>200 max.</span>
    </div>
    <button onClick={sendTweet}>POST</button>
  </div>
)}

export default Tweeter;