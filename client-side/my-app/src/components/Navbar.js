import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          <img id="mc-ride" src={require("../mcride.jpg")} alt="life grips"></img>
        </div>
        <div className="navigation">
          <ul>
            <li>home</li>
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
