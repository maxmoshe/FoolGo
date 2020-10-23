import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      dor: 'dormin fasol assedo'
    }
  }

  render(){
    return(
      <Router>
      <div className="App" >
        <header className="App-header">
          <NavLink to="/register">{this.state.dor}</NavLink>
        </header>
        <body>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        </body>
      </div>
      </Router>
    )
  }
}

export default App;
