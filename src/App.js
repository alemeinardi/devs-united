import { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="App">
      <header>
        <div className="box">
          <img className="logo" src="./images/logo.svg" alt="Logo"></img>
          <img src="./images/logo_name.svg" alt="Logo name"></img>
        </div>
        {isRegister ? <Register /> : <Login />}
      </header>
    </div>
  );
}

export default App;