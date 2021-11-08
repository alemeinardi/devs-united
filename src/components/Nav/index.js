import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import { AppContext } from "../../contexts/AppContext";
import { logout } from "../../firebase/firebase";

const Nav = () => {

  const { setUser } = useContext(AppContext);
  const [ isProfile, setIsProfile] = useState(true);
  
  const appNav = () => {
    return (<nav>
      <img className={styles.user_photo} alt="User" src="./images/user_photo.png"></img>
      <img className={styles.min_logo} alt="Logo" src="./images/logo.svg"></img>
      <img className={styles.min_logo_name} alt="Logo Name" src="./images/logo_name.svg"></img>
    </nav>);
  };

  const handleLogOut = () => {
    logout();
    setUser(null);
  }

  const profile = () => {
    return (<nav>
      <div>
        <img alt="arrow" src="./images/backarrow.png"></img>
        <span>user</span>
      </div>
      <button className={styles.button_logout} onClick={handleLogOut}>
        LOGOUT
        <img alt="logout" src="./images/logout.png"></img>
      </button>
    </nav>);
  };

  return isProfile ? profile() : appNav()
  }

export default Nav;