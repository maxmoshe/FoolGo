import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      page: "Main",
    }
  }

  decidePage() {

  }


  render(){
    return(
      <div className="App" >
        <header className="App-header">
        <Register props="a"/>
        </header>
      </div>
    )
  }
}

export default App;
