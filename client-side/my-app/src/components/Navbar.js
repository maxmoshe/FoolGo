import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          <NavLink to="/login"><img id="mc-ride" src={require("../assets/mcride.jpg")} alt="life grips"></img></NavLink>
        </div>
        <div className="navigation">
          <ul>
            <li>placeholder a</li>
            <li>placeholder b</li>
            <li>placeholder c</li>
          </ul>
        </div>
        <div className="userData">
          <p>WORK IN PROGRESS</p>
          <img src="https://st3.depositphotos.com/2224394/16611/i/1600/depositphotos_166117194-stock-photo-powerful-construction-worker.jpg"></img>
        </div>
      </div>
    )
  }
}

export default Navbar;
