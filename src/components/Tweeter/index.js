import React, { useContext } from "react";
import styles from "./index.module.css";
import { AppContext } from "../../contexts/AppContext.js";
import { myfirestore } from "../../firebase/firebase.js"

const Tweeter = () => {
  const { tweet, setTweet } = useContext(AppContext);

  const handleChange = (e) => {
    let newTweet = {...tweet,
    [e.target.name]: e.target.value}
    console.log(newTweet)
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
      <span className={styles.letter_counter}>0</span>
      <span className={styles.letter_max}>200 max.</span>
    </div>
    <button onClick={sendTweet}>POST</button>
  </div>
)}

export default Tweeter;