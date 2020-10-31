import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import About from './components/About';
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
      <div className="App">
        <body>
        <div className="NavbarContainer">
          <Navbar></Navbar>
        </div>
        <div className="PageContainer">
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/about" component={About}/>
        </div>
        </body>
      </div>
      </Router>
    )
  }
}

export default App;
