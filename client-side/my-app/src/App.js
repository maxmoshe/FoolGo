import React from 'react';
import Login from './Login';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="App" >
        <header className="App-header">
        <Login/>
        </header>
      </div>
    )
  }
}

export default App;
