import React, { useContext, useEffect } from "react";
import styles from "./index.module.css";
import Login from "../Login";
import Register from "../Register";
import { AppContext } from "../../contexts/AppContext";
import { auth, loginConGoogle, logout } from "../../firebase/firebase";

const Home = () => {
  const { user, setUser, setDisplayName } = useContext(AppContext);

  useEffect(() => {
    auth.onAuthStateChanged((google_user) => {
      const newUser = {
        email: google_user.email
      }
      setDisplayName(google_user.displayName) 
      setUser(newUser);
    });
  }, [])

  return (
  <div className={styles.home}>
    <div className="box">
      <img className={styles.logo} src="./images/logo.svg" alt="Logo"></img>
      <img src="./images/logo_name.svg" alt="Logo name"></img>
    </div>
    {user ? <Register /> : <Login />}
  </div>
  )}

  export default Home;