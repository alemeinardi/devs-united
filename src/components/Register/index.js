import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import ColorsPiker from "../ColorsPiker";
import Copyright from "../Copyright";
import { AppContext } from "../../contexts/AppContext";
import { myfirestore } from "../../firebase/firebase.js"

const Register = () => {
  const { user, setUser, displayName } = useContext(AppContext);

  const handleChange = (e) => {
    let newUser = {...user,
    username: e.target.value}
    setUser(newUser)
  }

  const saveUserPreferences = () => {
    myfirestore.collection("users").add(user)
  }

  return (
    <div className={styles.register}>
      <div className="box">
        <h1>WELCOME<br/><em>{displayName}!</em></h1>
        <input type="text" placeholder="Type your username" className={styles.username} onChange={handleChange}></input>
        <ColorsPiker />
      </div>
      <button className={styles.button_register} onClick={saveUserPreferences}>CONTINUE</button>
      <Copyright/>
    </div>
)}

export default Register;