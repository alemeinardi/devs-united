import React, { useState, useEffect, useContext } from "react";
import styles from "./index.module.css";
import { myfirestore } from "../../firebase/firebase.js";
import { AppContext } from "../../contexts/AppContext";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Feed = () => {
  const { user } = useContext(AppContext);
  const [tweets, setTweets] = useState([]);

  const deleteTweet = (id) => {

    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure to delete this tweet?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => myfirestore.doc(`tweets/${id}`).delete()
        },
        {
          label: 'No'
        }
      ]
    });
  }

  const likeTweet = (tweetId, likes) => {
    myfirestore.collection("users_tweets")
    .where("tweetId", "==", tweetId)
    .where("userId", "==", user.userId)
    .get()
    .then((documents) => {
      const userNotLikesTweet = documents.empty;
      if (userNotLikesTweet) {
        myfirestore.collection("users_tweets").add({ tweetId: tweetId, userId: user.userId}) }
      else {
        myfirestore.collection("users_tweets")
        .where("tweetId", "==", tweetId)
        .where("userId", "==", user.userId)
        .get()
        .then((documents) => documents.forEach(doc => doc.ref.delete()))
      }
      myfirestore.doc(`tweets/${tweetId}`).update({likes: likes + (documents.empty ? 1 : -1)});
    })
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
            {user.userId === tweet.userId &&
            <img className={styles.icon_trash} src="../images/trash.png" alt="Trash" onClick={() => deleteTweet(tweet.id)} />}
          </div>
          <p>{tweet.tweet}</p>
          <div className={styles.likes}>
           <img className={styles.icon_heart} height="13px" src={tweet.likes > 0 ? "../images/onheart.svg" : "../images/offheart.svg"} alt="Heart" onClick={() => likeTweet(tweet.id, tweet.likes)} />
            <span>{tweet.likes > 0 && tweet.likes}</span>
          </div>
        </div>
      </div>
    ))}
  </div>)
}

export default Feed;