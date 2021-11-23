import React from "react";
import styles from "./index.module.css";

const Error = ({message}) => {
  return (<div className={styles.error}>
      <img src="./images/warning.png" alt="Error"></img>
      <span>{message}</span>
  </div>)
}

export default Error;