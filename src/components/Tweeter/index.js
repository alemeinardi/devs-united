import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import { AppContext } from "../../contexts/AppContext";
import { myfirestore } from "../../firebase/firebase.js"

const Tweeter = () => {

  const { user } = useContext(AppContext);

  const [tweet, setTweet] = useState({
    userId: "",
    username: "",
    color: "",
    photoURL: "",
    date: null,
    tweet: "",
    likes: 0
  })

  const [longTweet, setLongTweet] = useState(0);

  const handleChange = (e) => {
    let newTweet = {...tweet,
    userId: user.userId,
    username: user.username,
    color: user.color,
    photoURL: user.photoURL,
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
    <img className={styles.username_photo} style={{ borderColor: user.color }} src={user.photoURL} alt="User"></img>
    <div className={styles.tweet}>
      <textarea name="tweet" placeholder="What’s happening?" cols="120" rows="4" maxLength="200" onChange={handleChange}>
        </textarea>
      <div className={styles.letters}>
        <span className={styles.letter_counter}>{longTweet}</span>
        <span className={styles.letter_max}>200 max.</span>
      </div>
      <button onClick={sendTweet}>POST</button>
      </div>
  </div>
)}

export default Tweeter;