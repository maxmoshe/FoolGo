import React from 'react';
import Login from './Login';
import Navbar from './components/Navbar'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="App" >
        <header className="App-header">
        <Navbar/>
        <Login/>
        </header>
      </div>
    )
  }
}

export default App;
