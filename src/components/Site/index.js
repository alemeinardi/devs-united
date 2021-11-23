import React from "react";
import styles from "./index.module.css";

const App = () => {
  if (!isAuthenticated || !isRegistered) { 
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