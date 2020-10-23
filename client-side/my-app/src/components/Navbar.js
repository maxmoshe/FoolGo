import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// components
import UserData from './UserData'

// assets
import ReactLogo from '../assets/logo.svg'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          <NavLink to="/login"><img id="a" src={ReactLogo}></img></NavLink>
        </div>
        <div className="navigation">
          <ul>
            <li>placeholder a</li>
            <li>placeholder b</li>
            <li>placeholder c</li>
          </ul>
        </div>
        <div className="UserData">
          <UserData></UserData>
        </div>
      </div>
    )
  }
}

export default Navbar;
