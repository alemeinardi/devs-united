import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import { AppContext } from "../../contexts/AppContext";
import { logout } from "../../firebase/firebase";

const Nav = () => {

  const { user, setUser } = useContext(AppContext);
  const [ isProfile, setIsProfile] = useState(false);
  
  const handleLogOut = () => {
    logout();
    setIsProfile(false);
    setUser({...user,
      userId: null});
  }

  const appNav = () => {
    return (<nav>
      <img className={styles.username_photo} style={{ borderColor: user.color }} onClick={() => setIsProfile(true)} alt="User" src={user.photoURL}></img>
      <img className={styles.min_logo} alt="Logo" src="./images/logo.svg"></img>
      <img className={styles.min_logo_name} alt="Logo Name" src="./images/logo_name.svg"></img>
    </nav>);
  };

  const profile = () => {
    return (<nav>
      <div className={styles.username}>
        <img alt="arrow" src="./images/backarrow.png"></img>
        <span>{user.username}</span>
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