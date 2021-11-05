import React, { useContext } from "react";
import styles from "./index.module.css";
import { AppContext } from "../../contexts/AppContext";
import Login from "../Login";
import Register from "../Register";

const Home = () => {
  const { isRegistered } = useContext(AppContext);

  return (
  <div className={styles.home}>
    <div className="box">
      <img className={styles.logo} src="./images/logo.svg" alt="Logo"></img>
      <img src="./images/logo_name.svg" alt="Logo name"></img>
    </div>
    {isRegistered ? <Register /> : <Login />}
  </div>
  )}

  export default Home;