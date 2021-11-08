import React, { useState } from "react";
import styles from "./index.module.css";
import { myfirestore } from "../../firebase/firebase.js"

const Tweeter = () => {
  const [tweet, setTweet] = useState({
    date: null,
    tweet: "",
    id: null,
    userid: "",
    username: "",
    likes: 0
  })

  const [longTweet, setLongTweet] = useState(0);

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
    <textarea name="tweet" placeholder="What’s happening?" cols="120" rows="4" maxlength="200" onChange={handleChange}>
    </textarea>
    <div className={styles.letters}>
      <span className={styles.letter_counter}>{longTweet}</span>
      <span className={styles.letter_max}>200 max.</span>
    </div>
    <button onClick={sendTweet}>POST</button>
  </div>
)}

export default Tweeter;