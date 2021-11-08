import { useContext } from 'react';
import './App.css';
import Home from "./components/Home";
import Nav from './components/Nav';
import Main from './components/Main';
import { AppContext } from "./contexts/AppContext"

function App() {
  const { user } = useContext(AppContext);

  if (!user) { 
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