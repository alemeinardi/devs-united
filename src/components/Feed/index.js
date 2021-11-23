import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { myfirestore } from "../../firebase/firebase.js"

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const deleteTweet = (id) => {
    myfirestore.doc(`tweets/${id}`).delete();
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
          userId: doc.data().userId,
          likes: doc.data().likes,
          username: doc.data().username,
          color: doc.data().color,
          photoURL: doc.data().photoURL
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
        <img className={styles.username_photo} style={{ borderColor: tweet.color }} src={tweet.photoURL} alt="profile"></img>
        <div className={styles.tweet_data}>
          <div className={styles.tweet_header}>
            <div>
              <span className="username" style={{ backgroundColor: tweet.color }}>{tweet.username}</span>
              <span>{` - ${tweet.date.toDate().getDate()} ${tweet.date.toDate().toLocaleDateString('es-ES', { month: 'short'})}.`}</span>
            </div>
            <img className={styles.icon_trash} src="../images/trash.png" alt="Trash" onClick={() => deleteTweet(tweet.id)} />
          </div>
          <p>{tweet.tweet}</p>
          <img className={styles.icon_heart} height="13px" src="../images/offheart.svg" alt="Heart" onClick={likeTweet} />
        </div>
      </div>
    ))}
  </div>)
}

export default Feed;