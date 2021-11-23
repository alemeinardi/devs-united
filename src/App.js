import { useContext, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from "./components/Login";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Tweeter from "./components/Tweeter";
import { AppContext } from "./contexts/AppContext";
import { auth, myfirestore } from "./firebase/firebase";

function App() {
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    auth.onAuthStateChanged((google_user) => {
      if (google_user) {

        myfirestore.collection("users")
        .where("userId", "==", google_user.uid)
        .get()
        .then((documents) => {
          if (documents.empty){
            setUser({...user,
              userId: google_user.uid,
              email: google_user.email,
              photoURL: google_user.photoURL,
              isRegistered: false,
              displayName: google_user.displayName });
          }
          else
          {
            documents.forEach((doc) => {
              setUser({
              userId: doc.data().userId,
              email: doc.data().email,
              photoURL: doc.data().photoURL,
              username: doc.data().username,
              color: doc.data().color,
              isRegistered: true });
          }
        )}})
      }})},[])
  
  const Home = () => {
    return (
    <div className="home">
      <div className="box">
        <img className="logo" src="./images/logo.svg" alt="Logo"></img>
        <img src="./images/logo_name.svg" alt="Logo name"></img>
      </div>
      {user.userId  && !user.isRegistered ? <Register /> : <Login />}
    </div>)
  }

  if (!user.userId || !user.isRegistered) { 
      return <div className="App">
        <Home/>
      </div>
  } else {
    return (
      <div className="App">
        <Nav/>
        <main>
          <header>
            <Tweeter/>
          </header>
          <Feed/>
        </main>
      </div>
    )
  }
}

export default App;