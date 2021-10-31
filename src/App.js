import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header>
        <div className="box">
          <img className="logo" src="./images/logo.svg" alt="Logo"></img>
          <img src="./images/logo_name.svg" alt="Logo name"></img>
        </div>
        <Login />
      </header>
      <footer>
          <p className="copyright">© 2020 Devs_United - <em>BETA</em></p>
      </footer>
    </div>
  );
}

export default App;