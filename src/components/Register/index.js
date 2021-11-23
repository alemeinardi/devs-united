import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import ColorsPiker from "../ColorsPiker";
import Copyright from "../Copyright";
import Error from "../Error";
import { AppContext } from "../../contexts/AppContext";
import { myfirestore } from "../../firebase/firebase.js"

const Register = () => {
  const { user, setUser } = useContext(AppContext);
  
  const [ error, setError ] = useState({
    isError: false,
    message: ""
  });

  const handleUsernameChange = (e) => {
    let newUser = {...user,
    username: e.target.value.toLowerCase()}
    setUser(newUser);

  }

  const saveUser = () => {
    console.log(user.username.trim().length)
    if (user.username.trim().length === 0)
    {
      setError({isError: true, message: "Type your username pleasse!"})}
    else {

      const userToSave = {
        userId: user.userId,
        email: user.email,
        username: user.username,
        color: user.color,
        photoURL: user.photoURL
      }

      myfirestore.collection("users")
      .add(userToSave)
      .catch((e) => {
        /* NO FUNCIONA EL CONTROL DE ERRORES? */
        setError({isError: true, message: ""})
      })
      setUser({...user,
        isRegistered: true})
    }
  }

  return (
    <div className={styles.register}>
      <div className="box">
        <h1>WELCOME<br/><em>{user.displayName}!</em></h1>
        <input type="text" autoFocus maxLength="30" placeholder="Type your username" className={styles.username}  value={user.username} onChange={handleUsernameChange}></input>
        <ColorsPiker />
      </div>
      <button className={styles.button_register} onClick={saveUser}>REGISTER</button>
      {error.isError && <Error message={error.message} />}
      <Copyright/>
    </div>
)}

export default Register;