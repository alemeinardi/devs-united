import React from "react";
import styles from "./index.module.css";
import ColorsPiker from "../ColorsPiker";
import Copyright from "../Copyright";

const Register = () => {
  return (
    <div className={styles.register}>
      <div className="box">
        <h1>WELCOME<br/><em>NAME!</em></h1>
        <input type="text" placeholder="Type your username" className={styles.username}></input>
        <ColorsPiker />
      </div>
      <button className={styles.button_register}>CONTINUE</button>
      <Copyright/>
    </div>
)}

export default Register;