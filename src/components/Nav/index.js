import React from "react";
import styles from "./index.module.css";

const Nav = () => {
  return (<nav>
    <img className={styles.user_photo} alt="User Photo" src="./images/user_photo.png"></img>
    <img className={styles.min_logo} alt="Logo" src="./images/logo.svg"></img>
    <img className={styles.min_logo_name} alt="Logo Name" src="./images/logo_name.svg"></img>
  </nav>)
}

export default Nav;