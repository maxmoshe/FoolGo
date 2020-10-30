import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// components
import NavbarUser from './NavbarUser';
// assets
import ReactLogo from '../assets/logo.svg'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink to="/login">
        <div className="logo" style={{width: 60, height: '100%', display: 'flex', justifyContent: 'center'}}>
            <img src={ReactLogo} style={{width: 50, height: 50}}/>
        </div>
        </NavLink>
        <div className="navigation">
          <ul>
            <NavLink to="/about" style={{textDecoration: 'none', color: 'white'}}>
              <li>About ME</li>
            </NavLink>
            <li>Hymns</li>
            <li>Legal Complaints</li>
          </ul>
        </div>
        <NavbarUser/>
      </div>
    )
  }
}

export default Navbar;
