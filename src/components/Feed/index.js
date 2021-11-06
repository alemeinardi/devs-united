import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { myfirestore } from "../../firebase/firebase.js"

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const deleteTweet = (id) => {
    setTweets(tweets.filter((thistweet) => { return thistweet.id !== id}))
  }

  const likeTweet = (id, like) => {
    like = !like ? 0: like;
    myfirestore.doc(`tweets/${id}`).update({likes: like +1});
  }

  useEffect(() => {
    const unsuscribe = myfirestore.collection("tweets")
    .onSnapshot(snapshot => {
      const tweetsArray = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          date: doc.data().date,
          tweet: doc.data().tweet,
          userid: 0,
          likes: doc.data().likes,
          username: doc.data().username
        } 
      })
      setTweets(tweetsArray)
    });
    return () => unsuscribe();
  }, [])

  return (
  <div className={styles.feed}>
    {tweets.map((tweet) => (
      <div key={tweet.id} className={styles.tweet}>
        <span className="username">{tweet.username}</span>
        <span>{` - ${tweet.date.toDate().getDay()} ${tweet.date.toDate().toLocaleDateString('es-ES', { month: 'short'})}.`}</span>
        <img className={styles.icon_trash} src="../images/trash.png" alt="Trash Image" onClick={deleteTweet} />
        <p>{tweet.tweet}</p>
        <img className={styles.icon_heart} height="13px" src="../images/heart.svg" alt="Heart Image" onClick={likeTweet} />
      </div>
    ))}
  </div>)
}

export default Feed;