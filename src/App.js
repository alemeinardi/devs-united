import { useEffect, useState } from 'react';
import './App.css';
import Home from "./components/Home";
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  if (isLogged) { 
    return <div className="App"><Home/></div>
  } else {
    return (
      <div className="App">
        <Nav/>
        <Main/>
      </div>
    )
  }
}

export default App;