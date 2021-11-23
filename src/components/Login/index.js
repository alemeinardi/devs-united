import React from "react";
import styles from "./index.module.css";
import Copyright from "../Copyright";
import { loginWithGoogle } from "../../firebase/firebase";

const Login = () => {
  return (
  <div className={styles.login}>
    <div className="box">
      <h1>BIENVENIDO!</h1>
      <h2>Esta es la Red Social de los Programadores y amantes de la Tecnología</h2>
      <img className={styles.signin} src="./images/google_signin.png" alt="Google Signin" onClick={loginWithGoogle}></img>
    </div>
    <Copyright/>
  </div>
)}

export default Login;